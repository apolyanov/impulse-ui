import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Property } from 'csstype';

import { ButtonStyleProps, LinkStyleProps, TextButtonStyleProps } from '../../buttons';
import { IconStyleProps } from '../../icon';
import { InputStyleProps } from '../../input';
import { ContainerStyleProps } from '../../layout';
import { TypographyStyleProps } from '../../text';
import { IStyle } from '../../types';

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

type CompositeComponentColors = ComponentColors & ComponentColorsHover;

interface ComponentColors {
  backgroundColor: Property.BackgroundColor;
  borderColor: Property.BorderColor;
  color: Property.Color;
}

interface ComponentColorsHover {
  backgroundColorHover: Property.BackgroundColor;
  borderColorHover: Property.BorderColor;
  colorHover: Property.Color;
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
}

type CustomITheme = Partial<ComponentsThemes>;

interface AppTheme {
  mode: ThemeMode;
  themes?: Partial<ComponentsThemes>;
}

interface IThemeProviderProps {
  themeMode?: ThemeMode;
  themes: CustomITheme;
  children: ReactNode;
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
  CompositeComponentColors,
  CustomITheme,
  IThemeContext,
  IThemeProviderProps,
  UseIThemeContextFn,
};

export { ThemeMode };
