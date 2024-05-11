import { Property } from 'csstype';
import { Interpolation, StyledObject, StyleFunction } from 'styled-components';

import { IOStyle, IStyle } from '../theme';

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

export type { AnimationHelper, Margin, MergePartialThemesFnArgs, MergeThemesFnArgs, Padding };
