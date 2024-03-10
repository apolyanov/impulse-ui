import { IOStyle, IStyle } from '../theme';

interface MergeThemesFn {
  <T = any>(defaultTheme: IStyle<T>, overridingTheme?: IOStyle<T>, parentProps?: T): IStyle<T>;
}

interface MergePartialThemesFn {
  <T = any>(overridingTheme?: IOStyle<T>, defaultTheme?: IOStyle<T>, parentProps?: T): IOStyle<T> | undefined;
}

export type { MergePartialThemesFn, MergeThemesFn };
