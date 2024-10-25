import { Property } from 'csstype';
import { Interpolation, StyleFunction, StyledObject } from 'styled-components';
import { IOStyle, IStyle, ThemeMode } from '../types';

type CreateBaseComponentStyleArgs<Props extends object = {}> = {
  globalTheme?: IOStyle<Props>;
  baseTheme: IStyle<Props>;
  overridingTheme?: IOStyle<Props>;
  mode: ThemeMode;
  rest?: Props & { $cssProps?: StyledObject };
};

type MergeThemesFnArgs<Props extends object = {}> = {
  defaultTheme: IStyle<Props>;
  overridingTheme?: IOStyle<Props>;
  props?: Props;
};

type MergePartialThemesFnArgs<Props extends object = {}> = {
  defaultTheme?: IOStyle<Props>;
  overridingTheme?: IOStyle<Props>;
  props?: Props;
};

interface AnimationHelper {
  (
    styles: NoInfer<TemplateStringsArray | StyledObject<object> | StyleFunction<object>>,
    ...interpolations: Interpolation<object>[]
  ): Property.Animation<string & {}> | undefined;
}

export type { AnimationHelper, MergePartialThemesFnArgs, MergeThemesFnArgs, CreateBaseComponentStyleArgs };
