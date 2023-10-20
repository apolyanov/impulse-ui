import { StyledObject } from 'styled-components';

import { CompositeComponentColors } from './theme.types';

interface BaseIComponent<T, E = any> {
  $iStyle?: IOStyle<T>;
  $iProps?: Partial<T>;
  $parentProps?: E;
}

interface IComponent<T, E = any> {
  iStyle?: IOStyle<T>;
  iProps?: Partial<T>;
  parentProps?: E;
}

type ComponentStyleProps<T = BaseComponentStyleProps> = Partial<T & BaseComponentStyleProps>;

type BaseComponentStyleProps = {
  hasDropShadow: boolean;
  hasBorderRadius: boolean;
  hasMargin: boolean;
  hasPadding: boolean;
};

type IOProps<T> = Partial<T>;

type IOCss<T, K> =
  | ((iColorTheme: Partial<CompositeComponentColors>, iProps: T, parentProps?: K) => StyledObject<object> | undefined)
  | StyledObject<object>;

type ICss<T, K> = (iColorTheme: CompositeComponentColors, iProps: T, parentProps?: K) => StyledObject<object>;

interface ComponentMap {
  key: string;
  subKeys?: Array<ComponentMap>;
  prefix?: string;
}

interface IStyle<T = ComponentStyleProps, K = any> {
  iColorTheme: IColorTheme;
  iCss: ICss<T, K>;
}

interface IOStyle<T = ComponentStyleProps, K = any> {
  iColorTheme?: IOColorTheme;
  iCss?: IOCss<T, K>;
}

interface BaseIOStyle<T = ComponentStyleProps, K = any> {
  iColorTheme?: IColorTheme;
  iCss?: (iColorTheme: CompositeComponentColors, iProps: T, parentProps?: K) => StyledObject<object> | undefined;
}

interface IOColorTheme {
  light?: Partial<CompositeComponentColors>;
  dark?: Partial<CompositeComponentColors>;
}

interface IColorTheme {
  light: CompositeComponentColors;
  dark: CompositeComponentColors;
}

export type {
  BaseComponentStyleProps,
  BaseIComponent,
  BaseIOStyle,
  ComponentMap,
  ComponentStyleProps,
  IColorTheme,
  IComponent,
  ICss,
  IOColorTheme,
  IOCss,
  IOProps,
  IOStyle,
  IStyle,
};
