import { Dispatch, JSX, SetStateAction } from 'react';
import { SimplePseudos } from 'csstype';

import { BackgroundColor, BorderColor, Color, OutlineColor } from '../css';

import { IStyle } from './components.types';

type ThemeMode = 'light' | 'dark';

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
  }
>;

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
  ColorsKeysValues,
  ComponentColors,
  ComponentsThemes,
  ComponentTheme,
  CustomITheme,
  IThemeContext,
  IThemeProviderProps,
  ThemeMode,
  UseIThemeContextFn,
};
