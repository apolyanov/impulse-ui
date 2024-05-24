import {
  AnimationHelper,
  ComponentColors,
  CreateBaseComponentStyle,
  IOCss,
  IOStyle,
  IStyle,
  Margin,
  MergePartialThemesFnArgs,
  MergeThemesFnArgs,
  Padding,
  ThemeMode,
} from '@impulse-ui/types';
import { ColorsKeysValues } from '@impulse-ui/types';
import { SimplePseudos } from 'csstype';
import merge from 'lodash/merge';
import { css } from 'styled-components';

import { cssPropsMap, LIGHT } from './constants';

const extractCssProps = (props: any) => {
  const cssProps: any = {};

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      const newCssPropData = cssPropsMap[key as keyof typeof cssPropsMap]?.(value, key);

      if (newCssPropData) {
        delete props[key];

        if (Array.isArray(newCssPropData)) {
          newCssPropData.forEach(([key, value]: [string, string | number]) => (cssProps[key] = value));
        } else {
          cssProps[key] = value;
        }
      }
    });
  }

  return cssProps;
};

const createBaseComponentStyle: CreateBaseComponentStyle = ({
  baseTheme,
  overridingTheme,
  globalTheme,
  mode,
  rest,
}) => {
  const cssProps = rest?.$cssProps;
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: mergeThemes({ defaultTheme: baseTheme, overridingTheme: globalTheme }),
    overridingTheme: overridingTheme,
  });
  const themeMode = getThemeMode(mode);

  return css({
    ...iCss({
      iColorTheme: iColorTheme[themeMode],
      getThemeColor: getThemeColor(iColorTheme[themeMode]),
    }),
    ...cssProps,
  });
};

const shouldRenderCssProp = <T>(shouldRender: boolean | undefined, cssProp: T): T | undefined => {
  if (shouldRender) return cssProp;
};

const getThemeColor =
  (componentColors?: ComponentColors) => (colorKey: keyof ColorsKeysValues, stateKey?: SimplePseudos) => {
    if (stateKey) return componentColors?.[stateKey]?.[colorKey];

    return componentColors?.[colorKey];
  };

const constructICss = <T>(iColorTheme: ComponentColors, props?: T | any, iCss?: IOCss<T>) => {
  if (typeof iCss === 'function') {
    return iCss({ iColorTheme, getThemeColor: getThemeColor(iColorTheme), ...props });
  }

  return { ...iCss };
};

const mergeThemes = <T>({ defaultTheme, overridingTheme, props }: MergeThemesFnArgs<T>): IStyle => {
  if (overridingTheme) {
    return {
      iCss: ({ iColorTheme, ...rest }) =>
        merge(
          defaultTheme.iCss({ iColorTheme, getThemeColor: getThemeColor(iColorTheme), ...rest, ...props }),
          constructICss(iColorTheme, props, overridingTheme?.iCss),
        ),
      iColorTheme: {
        light: { ...defaultTheme.iColorTheme.light, ...overridingTheme.iColorTheme?.light },
        dark: { ...defaultTheme.iColorTheme.dark, ...overridingTheme.iColorTheme?.dark },
      },
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
        iCss: ({ iColorTheme }) => constructICss(iColorTheme, props, overridingTheme?.iCss),
      };
    }

    return overridingTheme;
  }

  if (!overridingTheme && defaultTheme) {
    if (props) {
      return {
        ...defaultTheme,
        iCss: ({ iColorTheme }) => constructICss(iColorTheme, props, defaultTheme?.iCss),
      };
    }

    return defaultTheme;
  }

  if (overridingTheme && defaultTheme) {
    return {
      iCss: ({ iColorTheme }) =>
        merge(
          constructICss(iColorTheme, props, defaultTheme?.iCss),
          constructICss(iColorTheme, props, overridingTheme?.iCss),
        ),
      iColorTheme: {
        light: { ...defaultTheme.iColorTheme?.light, ...overridingTheme.iColorTheme?.light },
        dark: { ...defaultTheme.iColorTheme?.dark, ...overridingTheme.iColorTheme?.dark },
      },
    };
  }
};

const margin = (value: Margin) => ({
  margin: value,
});

const marginX = (value: Margin) => ({
  marginLeft: value,
  marginRight: value,
});

const marginY = (value: Margin) => ({
  marginTop: value,
  marginBottom: value,
});

const padding = (value: Padding) => ({
  padding: value,
});

const paddingX = (value: Padding) => ({
  paddingLeft: value,
  paddingRight: value,
});

const paddingY = (value: Padding) => ({
  paddingTop: value,
  paddingBottom: value,
});

const animationHelper = css as unknown as AnimationHelper;

const getThemeMode = (mode: ThemeMode) => mode || LIGHT;

export {
  animationHelper,
  createBaseComponentStyle,
  extractCssProps,
  getThemeColor,
  getThemeMode,
  margin,
  marginX,
  marginY,
  mergePartialThemes,
  mergeThemes,
  padding,
  paddingX,
  paddingY,
  shouldRenderCssProp,
};
