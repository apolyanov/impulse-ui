import { SimplePseudos } from 'csstype';
import { Dispatch, JSX, SetStateAction } from 'react';

import { BackgroundColor, BorderColor, Color, IOStyle, OutlineColor } from '../types';

type ThemeMode = 'light' | 'dark';

type DataAttribute = `data-${string}`;

type ColorsKeysValues = {
  color: Color;
  backgroundColor: BackgroundColor;
  borderColor: BorderColor;
  outlineColor: OutlineColor;
  borderRightColor: BorderColor;
  borderLeftColor: BorderColor;
  borderTopColor: BorderColor;
  borderBottomColor: BorderColor;
  textShadowColor: Color;
  iconPrimaryColor: Color;
  iconSecondaryColor: Color;
};

type ComponentColors = Partial<
  ColorsKeysValues & {
    [T in SimplePseudos]: Partial<ColorsKeysValues>;
  } & { [T in DataAttribute]: Partial<ColorsKeysValues> }
>;

interface ComponentsThemes {
  button: IOStyle<JSX.IntrinsicElements['button']>;
  container: IOStyle<JSX.IntrinsicElements['div']>;
  spinnerLoader: IOStyle<JSX.IntrinsicElements['div']>;
  dotsLoader: IOStyle<JSX.IntrinsicElements['div']>;
  input: IOStyle<JSX.IntrinsicElements['input']>;
  textButton: IOStyle<JSX.IntrinsicElements['button']>;
  typography: IOStyle<JSX.IntrinsicElements['p']>;
  link: IOStyle<JSX.IntrinsicElements['a']>;
  icon: IOStyle<JSX.IntrinsicElements['svg']>;
  divider: IOStyle<JSX.IntrinsicElements['div']>;
  table: IOStyle<JSX.IntrinsicElements['table']>;
  thead: IOStyle<JSX.IntrinsicElements['thead']>;
  tfoot: IOStyle<JSX.IntrinsicElements['tfoot']>;
  tbody: IOStyle<JSX.IntrinsicElements['tbody']>;
  trow: IOStyle<JSX.IntrinsicElements['tr']>;
  theader: IOStyle<JSX.IntrinsicElements['th']>;
  tdata: IOStyle<JSX.IntrinsicElements['td']>;
}

interface MediaQueries {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

type CustomITheme = Partial<ComponentsThemes> & {
  mediaQueries: Partial<MediaQueries>;
};

interface AppTheme {
  mode: ThemeMode;
  themes?: Partial<ComponentsThemes>;
}

interface IThemeProviderProps {
  themeMode?: ThemeMode;
  themes?: CustomITheme;
}

interface IThemeContext {
  currentThemeMode: ThemeMode;
  setCurrentThemeMode: Dispatch<SetStateAction<ThemeMode>>;
}

interface UseIThemeContextFn {
  (): IThemeContext;
}

export type {
  AppTheme,
  ColorsKeysValues,
  ComponentColors,
  ComponentsThemes,
  CustomITheme,
  DataAttribute,
  IThemeContext,
  IThemeProviderProps,
  ThemeMode,
  UseIThemeContextFn,
  MediaQueries,
};
