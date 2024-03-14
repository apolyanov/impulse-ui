import {
  CompositeComponentColors,
  IOCss,
  Margin,
  MergePartialThemesFn,
  MergeThemesFn,
  Padding,
  ThemeMode,
} from '@impulse-ui/types';
import merge from 'lodash/merge';

import { LIGHT } from './constants';

const shouldRenderCssProp = <T>(shouldRender: boolean | undefined, cssProp: T): T | undefined => {
  if (shouldRender) return cssProp;
};

const constructICss = (iColorTheme: Partial<CompositeComponentColors>, parentProps: any, iCss?: IOCss<any>) => {
  if (typeof iCss === 'function') {
    return iCss({ iColorTheme, parentProps });
  }

  return { ...iCss };
};

const mergeThemes: MergeThemesFn = ({ defaultTheme, overridingTheme, props }) => {
  if (overridingTheme) {
    return {
      iCss: ({ iColorTheme, ...rest }) =>
        merge(defaultTheme.iCss({ iColorTheme, ...rest }), constructICss(iColorTheme, props, overridingTheme?.iCss)),
      iColorTheme: {
        light: { ...defaultTheme.iColorTheme.light, ...overridingTheme.iColorTheme?.light },
        dark: { ...defaultTheme.iColorTheme.dark, ...overridingTheme.iColorTheme?.dark },
      },
    };
  }

  return defaultTheme;
};

const mergePartialThemes: MergePartialThemesFn = ({ defaultTheme, overridingTheme, props }) => {
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

const getThemeMode = (mode: ThemeMode) => mode || LIGHT;

export {
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
