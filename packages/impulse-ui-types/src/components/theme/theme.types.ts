import { Dispatch, SetStateAction } from 'react';

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

interface ComponentTheme<T = any> {
  iStyle: IStyle<T>;
}

interface ComponentsThemes {
  button: ComponentTheme;
  container: ComponentTheme;
  input: ComponentTheme;
  textButton: ComponentTheme;
  typography: ComponentTheme;
  link: ComponentTheme;
  icon: ComponentTheme;
  divider: ComponentTheme;
  table: ComponentTheme;
  thead: ComponentTheme;
  tfoot: ComponentTheme;
  tbody: ComponentTheme;
  trow: ComponentTheme;
  theader: ComponentTheme;
  tdata: ComponentTheme;
}

type CustomITheme = Partial<ComponentsThemes>;

interface AppTheme {
  mode: ThemeMode;
  themes?: Partial<ComponentsThemes>;
}

interface IThemeProviderProps {
  themeMode?: ThemeMode;
  themes: CustomITheme;
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
