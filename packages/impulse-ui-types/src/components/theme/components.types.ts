import { SimplePseudos } from 'csstype';
import { StyledObject } from 'styled-components';

import { ColorsKeysValues, ComponentColors, DataAttribute } from './theme.types';

type BaseIComponent<T = any> = {
  $iStyle?: IOStyle<T>;
  $cssProps?: StyledObject;
} & T;

interface IComponent<T = any> {
  iStyle?: IOStyle<T>;
}

type ICssArgs<T = any> = {
  iColorTheme: ComponentColors;
  getThemeColor: GetThemeColorInnerFn;
} & T;

type IOCss<T = any> = ((args: ICssArgs<T>) => StyledObject<object> | undefined) | StyledObject<object>;

type ICss<T = any> = (args: ICssArgs<T>) => StyledObject<object>;

interface GetThemeColorInnerFn {
  (colorKey: keyof ColorsKeysValues, stateKey?: SimplePseudos | DataAttribute): string;
}

interface GetThemeColorFn {
  (componentColors?: ComponentColors): GetThemeColorInnerFn;
}

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
  iColorTheme?: IColorTheme;
  iCss?: IOCss<T>;
}

interface IColorTheme {
  light?: ComponentColors;
  dark?: ComponentColors;
}

export type {
  BaseIComponent,
  ComponentMap,
  GetThemeColorFn,
  GetThemeColorInnerFn,
  IColorTheme,
  IComponent,
  ICss,
  ICssArgs,
  IOCss,
  IOStyle,
  IStyle,
};
