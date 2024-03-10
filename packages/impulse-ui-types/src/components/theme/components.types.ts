import { StyledObject } from 'styled-components';

import { CompositeComponentColors } from './theme.types';

interface BaseIComponent<T> {
  $iStyle?: IOStyle<T>;
  $parentProps?: T;
}

interface IComponent<T = any> {
  iStyle?: IOStyle<T>;
  parentProps?: T;
}

interface IOCssArgs<T> {
  iColorTheme: Partial<CompositeComponentColors>;
  parentProps?: T;
}

interface ICssArgs<T> {
  iColorTheme: CompositeComponentColors;
  parentProps?: T;
}

type IOCss<T> = ((args: IOCssArgs<T>) => StyledObject<object> | undefined) | StyledObject<object>;

type ICss<T> = (args: ICssArgs<T>) => StyledObject<object>;

interface ComponentMap {
  key: string;
  subKeys?: Array<ComponentMap>;
  prefix?: string;
}

interface IStyle<T = any> {
  iColorTheme: IColorTheme;
  iCss: ICss<T>;
}

interface IOStyle<T = any> {
  iColorTheme?: IOColorTheme;
  iCss?: IOCss<T>;
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
  BaseIComponent,
  ComponentMap,
  IColorTheme,
  IComponent,
  ICss,
  ICssArgs,
  IOColorTheme,
  IOCss,
  IOCssArgs,
  IOStyle,
  IStyle,
};
