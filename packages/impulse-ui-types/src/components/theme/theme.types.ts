import { Dispatch, JSX, SetStateAction } from 'react';

import { BackgroundColor, BorderColor, Color } from '../css';

import { IStyle } from './components.types';

type ThemeMode = 'light' | 'dark';
type CompositeComponentColors = ComponentColors & ComponentColorsHover;

interface ComponentColors {
  backgroundColor: BackgroundColor;
  borderColor: BorderColor;
  color: Color;
}

interface ComponentColorsHover {
  backgroundColorHover: BackgroundColor;
  borderColorHover: BorderColor;
  colorHover: Color;
}

interface ComponentTheme<T extends object> {
  iStyle: IStyle<T>;
}

interface ComponentsThemes {
  button: ComponentTheme<JSX.IntrinsicElements['button']>;
  container: ComponentTheme<JSX.IntrinsicElements['div']>;
  spinnerLoader: ComponentTheme<JSX.IntrinsicElements['div']>;
  input: ComponentTheme<JSX.IntrinsicElements['input']>;
  textButton: ComponentTheme<JSX.IntrinsicElements['button']>;
  typography: ComponentTheme<JSX.IntrinsicElements['p']>;
  link: ComponentTheme<JSX.IntrinsicElements['a']>;
  icon: ComponentTheme<JSX.IntrinsicElements['svg']>;
  divider: ComponentTheme<JSX.IntrinsicElements['div']>;
  table: ComponentTheme<JSX.IntrinsicElements['table']>;
  thead: ComponentTheme<JSX.IntrinsicElements['thead']>;
  tfoot: ComponentTheme<JSX.IntrinsicElements['tfoot']>;
  tbody: ComponentTheme<JSX.IntrinsicElements['tbody']>;
  trow: ComponentTheme<JSX.IntrinsicElements['tr']>;
  theader: ComponentTheme<JSX.IntrinsicElements['th']>;
  tdata: ComponentTheme<JSX.IntrinsicElements['td']>;
}

type CustomITheme = Partial<ComponentsThemes>;

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
  ComponentColors,
  ComponentsThemes,
  ComponentTheme,
  CompositeComponentColors,
  CustomITheme,
  IThemeContext,
  IThemeProviderProps,
  ThemeMode,
  UseIThemeContextFn,
};
