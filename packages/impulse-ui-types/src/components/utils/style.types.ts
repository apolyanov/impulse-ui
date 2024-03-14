import { Property } from 'csstype';

import { IOStyle, IStyle } from '../theme';

type MergeThemesFnArgs = {
  defaultTheme: IStyle;
  overridingTheme?: IOStyle;
  props?: object;
};

type MergePartialThemesFnArgs = {
  defaultTheme?: IOStyle;
  overridingTheme?: IOStyle;
  props?: object;
};

interface MergeThemesFn {
  (args: MergeThemesFnArgs): IStyle;
}

interface MergePartialThemesFn {
  (args: Partial<MergePartialThemesFnArgs>): IOStyle | undefined;
}

type Margin = Property.Margin<number>;
type Padding = Property.Padding<number>;

export type { Margin, MergePartialThemesFn, MergePartialThemesFnArgs, MergeThemesFn, MergeThemesFnArgs, Padding };
