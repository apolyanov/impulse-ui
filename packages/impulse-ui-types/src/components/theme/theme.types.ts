import { Dispatch, SetStateAction } from 'react';

import { ButtonStyleProps, LinkStyleProps, TextButtonStyleProps } from '../buttons';
import { BackgroundColor, BorderColor, Color } from '../css';
import { IconStyleProps } from '../icon';
import { InputStyleProps } from '../input';
import { ContainerStyleProps } from '../layout';
import {
  TableStyleProps,
  TBodyStyleProps,
  TDataStyleProps,
  TFootStyleProps,
  THeaderStyleProps,
  THeadStyleProps,
  TRowStyleProps,
} from '../table';
import { TypographyStyleProps } from '../text';

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

interface ComponentTheme<T> {
  iStyle: IStyle<T>;
  iStyleProps: T;
}

interface ComponentsThemes {
  button: ComponentTheme<ButtonStyleProps>;
  container: ComponentTheme<ContainerStyleProps>;
  input: ComponentTheme<InputStyleProps>;
  textButton: ComponentTheme<TextButtonStyleProps>;
  typography: ComponentTheme<TypographyStyleProps>;
  link: ComponentTheme<LinkStyleProps>;
  icon: ComponentTheme<IconStyleProps>;
  divider: ComponentTheme<IconStyleProps>;
  table: ComponentTheme<TableStyleProps>;
  thead: ComponentTheme<THeadStyleProps>;
  tfoot: ComponentTheme<TFootStyleProps>;
  tbody: ComponentTheme<TBodyStyleProps>;
  trow: ComponentTheme<TRowStyleProps>;
  theader: ComponentTheme<THeaderStyleProps>;
  tdata: ComponentTheme<TDataStyleProps>;
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
