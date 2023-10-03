import { StyledObject } from 'styled-components/dist/types';

import { CompositeComponentColors } from './index';

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

interface ComponentMap {
  key: string;
  subKeys?: Array<ComponentMap>;
  prefix?: string;
}

interface IStyle<T = ComponentStyleProps> {
  iColorTheme: IColorTheme;
  iCss: (iColorTheme: CompositeComponentColors, iProps: T) => StyledObject<object>;
}

interface IOStyle<T = ComponentStyleProps, K = any> {
  iColorTheme?: IOColorTheme;
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
  ComponentMap,
  ComponentStyleProps,
  IComponent,
  IOColorTheme,
  IOProps,
  IOStyle,
  IStyle,
};
