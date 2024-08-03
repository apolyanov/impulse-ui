import { Property } from 'csstype';
import { Interpolation, StyleFunction, StyledObject } from 'styled-components';
import { IOStyle, IStyle, ThemeMode } from '../types';

type CreateBaseComponentStyleArgs = {
  globalTheme?: IOStyle;
  baseTheme: IStyle;
  overridingTheme?: IOStyle;
  mode: ThemeMode;
  rest?: any;
};

interface CreateBaseComponentStyle {
  (args: CreateBaseComponentStyleArgs): Interpolation<object>[];
}

type MergeThemesFnArgs<T = any> = {
  defaultTheme: IStyle<T>;
  overridingTheme?: IOStyle<T>;
  props?: T;
};

type MergePartialThemesFnArgs<T = any> = {
  defaultTheme?: IOStyle<T>;
  overridingTheme?: IOStyle<T>;
  props?: T;
};

type Margin = Property.Margin<number>;
type Padding = Property.Padding<number>;

interface AnimationHelper {
  (
    styles: NoInfer<TemplateStringsArray | StyledObject<object> | StyleFunction<object>>,
    ...interpolations: Interpolation<object>[]
  ): Property.Animation<string & {}> | undefined;
}

export type { AnimationHelper, CreateBaseComponentStyle, Margin, MergePartialThemesFnArgs, MergeThemesFnArgs, Padding };
