import { Dispatch, JSX, SetStateAction } from 'react';

import { IOStyle } from '../types';

type ThemeMode = 'light' | 'dark';

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
  ComponentsThemes,
  CustomITheme,
  IThemeContext,
  IThemeProviderProps,
  ThemeMode,
  UseIThemeContextFn,
  MediaQueries,
};
