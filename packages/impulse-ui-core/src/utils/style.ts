import { css, StyledObject } from 'styled-components';
import {
  AnimationHelper,
  ComponentColors,
  CreateBaseComponentStyle,
  GetComponentRefFn,
  GetMediaQueryFn,
  GetThemeColorFn,
  IOCss,
  IOStyle,
  IStyle,
  MergePartialThemesFnArgs,
  MergeThemesFnArgs,
  ThemeMode,
} from '../types';

import { LIGHT, cssPropsMap, DEFAULT_MEDIA_QUERIES } from '../utils';
import { merge } from './deepmerge.ts';

const isNullOrUndefined = (value: any) => value === undefined || value === null;

const extractCssProps = <T>(props: T) => {
  const cssProps: StyledObject = {};
  const componentProps: Omit<T, keyof typeof cssPropsMap> = { ...props };

  if (componentProps) {
    Object.entries(componentProps).forEach(([key, value]) => {
      const newCssPropData = cssPropsMap[key as keyof typeof cssPropsMap]?.(value, key);

      if (!isNullOrUndefined(newCssPropData)) {
        delete componentProps[key];

        if (Array.isArray(newCssPropData)) {
          newCssPropData.forEach(([key, value]: [string, string | number]) => (cssProps[key] = value));
        } else if (typeof newCssPropData === 'object') {
          cssProps[newCssPropData.key] = newCssPropData.value;
        } else {
          cssProps[key] = newCssPropData;
        }
      }
    });
  }

  return { cssProps, componentProps };
};

const createBaseComponentStyle: CreateBaseComponentStyle = ({
  baseTheme,
  overridingTheme,
  globalTheme,
  mode,
  rest,
}) => {
  const cssProps = rest?.$cssProps;
  const themeMode = getThemeMode(mode);

  const { iTheme, iCss } = mergeThemes<typeof rest>({
    defaultTheme: mergeThemes({ defaultTheme: baseTheme, overridingTheme: globalTheme }),
    overridingTheme: overridingTheme,
  });

  return css({
    ...iCss({
      iTheme: iTheme[themeMode],
      getThemeColor: getThemeColor(iTheme[themeMode]),
      getMediaQuery,
      getComponentRef,
    }),
    ...cssProps,
  });
};

const getThemeColor: GetThemeColorFn = (componentColors) => (colorKey, stateKey) => {
  if (stateKey) return componentColors?.[stateKey]?.[colorKey];

  return componentColors?.[colorKey];
};

const constructICss = <T>(iTheme: ComponentColors, props?: T | any, iCss?: IOCss<T>) => {
  if (typeof iCss === 'function') {
    return iCss({ iTheme, getThemeColor: getThemeColor(iTheme), getMediaQuery, getComponentRef, ...props });
  }

  return { ...iCss };
};

const mergeThemes = <T>({ defaultTheme, overridingTheme, props }: MergeThemesFnArgs<T>): IStyle => {
  if (overridingTheme) {
    return {
      iCss: ({ iTheme, ...rest }) =>
        merge(
          defaultTheme.iCss({
            iTheme,
            getThemeColor: getThemeColor(iTheme),
            getMediaQuery,
            getComponentRef,
            ...rest,
            ...props,
          }),
          constructICss(iTheme, props, overridingTheme?.iCss),
        ),
      iTheme: merge(defaultTheme?.iTheme, overridingTheme?.iTheme),
    };
  }

  return defaultTheme;
};

const mergePartialThemes = <T>({
  defaultTheme,
  overridingTheme,
  props,
}: MergePartialThemesFnArgs<T>): IOStyle<T> | undefined => {
  if (overridingTheme && !defaultTheme) {
    if (props) {
      return {
        ...overridingTheme,
        iCss: ({ iTheme }) => constructICss(iTheme, props, overridingTheme?.iCss),
      };
    }

    return overridingTheme;
  }

  if (!overridingTheme && defaultTheme) {
    if (props) {
      return {
        ...defaultTheme,
        iCss: ({ iTheme }) => constructICss(iTheme, props, defaultTheme?.iCss),
      };
    }

    return defaultTheme;
  }

  if (overridingTheme && defaultTheme) {
    return {
      iCss: ({ iTheme }) => {
        return merge(
          constructICss(iTheme, props, defaultTheme?.iCss),
          constructICss(iTheme, props, overridingTheme?.iCss),
        );
      },
      iTheme: merge(defaultTheme?.iTheme, overridingTheme?.iTheme),
    };
  }
};

const getComponentRef: GetComponentRefFn = (component) => `.${component.toString()}`;

const getMediaQuery: GetMediaQueryFn = (query) => `@media screen and (min-width: ${DEFAULT_MEDIA_QUERIES[query]}px)`;

const animationHelper = css as unknown as AnimationHelper;

const getThemeMode = (mode: ThemeMode) => mode || LIGHT;

export {
  animationHelper,
  createBaseComponentStyle,
  extractCssProps,
  getThemeColor,
  getComponentRef,
  getThemeMode,
  mergePartialThemes,
  mergeThemes,
};
