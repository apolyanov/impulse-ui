import { StyledObject } from 'styled-components';

import { MediaQueries } from '../types';
import { DataType, SimplePseudos, AdvancedPseudos } from 'csstype';

type BaseIComponent<Props extends object = object> = {
  $iCss?: IOCss<Props>;
  $iTheme?: IColorTheme;
  $cssProps?: StyledObject<object>;
} & Props;

interface IComponent<Props extends object = object> {
  iCss?: IOCss<Props>;
  iTheme?: IColorTheme;
}

type ICssArgs<Props extends object = {}> = {
  iTheme: IColorTheme['light' | 'dark'];
  getThemeColor: GetThemeColorInnerFn<IColorTheme['light' | 'dark']>;
  getMediaQuery: GetMediaQueryFn;
  getComponentRef: GetComponentRefFn;
} & Props;

type IOCss<Props extends object = {}> =
  | ((args: ICssArgs<Props>) => StyledObject<object> | undefined)
  | StyledObject<object>;

type ICss<Props extends object = {}> = (args: ICssArgs<Props>) => StyledObject<object>;

interface GetComponentRefFn {
  (component: Function): string;
}

type DataAttribute = `data-${string}`;

interface GetThemeColorInnerFn<Theme extends IColorTheme['light' | 'dark']> {
  (colorKey: keyof Theme, state?: SimplePseudos | AdvancedPseudos | DataAttribute): DataType.Color;
}

interface GetThemeColorFn<Theme extends IColorTheme = IColorTheme> {
  (componentColors?: Theme['light' | 'dark']): GetThemeColorInnerFn<typeof componentColors>;
}

interface GetMediaQueryFn {
  (query: keyof MediaQueries): string;
}

interface ComponentMap {
  key: string;
  subKeys?: Array<ComponentMap>;
  prefix?: string;
}

interface IStyle<Props extends object = {}> {
  iTheme: IColorTheme;
  iCss: ICss<Props>;
}

interface IOStyle<Props extends object = {}> {
  iTheme?: IColorTheme;
  iCss?: IOCss<Props>;
}

interface IColorTheme {
  light?: Record<string, DataType.Color | Record<string, DataType.Color>>;
  dark?: Record<string, DataType.Color | Record<string, DataType.Color>>;
}

export type {
  BaseIComponent,
  ComponentMap,
  GetThemeColorFn,
  GetThemeColorInnerFn,
  GetComponentRefFn,
  IColorTheme,
  GetMediaQueryFn,
  IComponent,
  ICss,
  ICssArgs,
  IOCss,
  IOStyle,
  IStyle,
};
