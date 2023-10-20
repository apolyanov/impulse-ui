import {
  CompositeComponentColors,
  IOCss,
  MergePartialPropsFn,
  MergePartialThemesFn,
  MergePropsFn,
  MergeThemesFn,
  ThemeMode,
} from '@impulse-ui/types';
import merge from 'lodash/merge';

import { LIGHT } from './constants';

const shouldRenderCssProp = <T>(shouldRender: boolean | undefined, cssProp: T): T | undefined => {
  if (shouldRender) return cssProp;
};

const constructICss = (
  iColorTheme: CompositeComponentColors | Partial<CompositeComponentColors>,
  iProps: any,
  parentProps: any,
  iCss?: IOCss<any, any>,
) => {
  if (typeof iCss === 'function') {
    return iCss(iColorTheme, iProps, parentProps);
  }

  return iCss;
};

const mergeThemes: MergeThemesFn = (defaultTheme, overridingTheme, parentProps) => {
  if (overridingTheme) {
    return {
      iCss: (iColorTheme, iProps) =>
        merge(
          defaultTheme.iCss(iColorTheme, iProps, parentProps),
          constructICss(iColorTheme, iProps, parentProps, overridingTheme?.iCss),
        ),
      iColorTheme: {
        light: { ...defaultTheme.iColorTheme.light, ...overridingTheme.iColorTheme?.light },
        dark: { ...defaultTheme.iColorTheme.dark, ...overridingTheme.iColorTheme?.dark },
      },
    };
  }

  return defaultTheme;
};

const mergePartialThemes: MergePartialThemesFn = (overridingTheme, componentDefaultTheme, parentProps) => {
  if (overridingTheme && !componentDefaultTheme) {
    if (parentProps) {
      return {
        ...overridingTheme,
        iCss: (iColorTheme, iProps) => constructICss(iColorTheme, iProps, parentProps, overridingTheme?.iCss),
      };
    }

    return overridingTheme;
  }

  if (!overridingTheme && componentDefaultTheme) {
    if (parentProps) {
      return {
        ...componentDefaultTheme,
        iCss: (iColorTheme, iProps) => constructICss(iColorTheme, iProps, parentProps, componentDefaultTheme?.iCss),
      };
    }

    return componentDefaultTheme;
  }

  if (overridingTheme && componentDefaultTheme) {
    return {
      iCss: (iColorTheme, iProps) =>
        merge(
          constructICss(iColorTheme, iProps, parentProps, componentDefaultTheme?.iCss),
          constructICss(iColorTheme, iProps, parentProps, overridingTheme?.iCss),
        ),
      iColorTheme: {
        light: { ...componentDefaultTheme.iColorTheme?.light, ...overridingTheme.iColorTheme?.light },
        dark: { ...componentDefaultTheme.iColorTheme?.dark, ...overridingTheme.iColorTheme?.dark },
      },
    };
  }
};

const mergeProps: MergePropsFn = (defaultProps, overridingProps) => {
  return { ...defaultProps, ...overridingProps };
};

const mergePartialProps: MergePartialPropsFn = (overridingProps, componentDefaultProps) => {
  if (overridingProps && !componentDefaultProps) {
    return overridingProps;
  }

  if (!overridingProps && componentDefaultProps) {
    return componentDefaultProps;
  }

  if (overridingProps && componentDefaultProps) {
    return { ...componentDefaultProps, ...overridingProps };
  }
};

const getThemeMode = (mode: ThemeMode) => mode || LIGHT;

export { getThemeMode, mergePartialProps, mergePartialThemes, mergeProps, mergeThemes, shouldRenderCssProp };
