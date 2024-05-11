import { StyledObject } from 'styled-components';

import { CompositeComponentColors } from './theme.types';

type BaseIComponent<T = any> = {
  $iStyle?: IOStyle<T>;
} & T;

interface IComponent<T = any> {
  iStyle?: IOStyle<T>;
}

type IOCssArgs<T = any> = {
  iColorTheme: Partial<CompositeComponentColors>;
} & T;

type ICssArgs<T = any> = {
  iColorTheme: CompositeComponentColors;
} & T;

type IOCss<T = any> = ((args: IOCssArgs<T>) => StyledObject<object> | undefined) | StyledObject<object>;

type ICss<T = any> = (args: ICssArgs<T>) => StyledObject<object>;

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
