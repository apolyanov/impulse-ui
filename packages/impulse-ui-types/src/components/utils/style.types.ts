import { IOStyle, IStyle } from '../theme';

interface MergeThemesFn {
  <T = any, E = any>(defaultTheme: IStyle<T>, overridingTheme?: IOStyle<T>, parentProps?: E): IStyle<T>;
}

interface MergePartialThemesFn {
  <T = any, E = any>(overridingTheme?: IOStyle<T>, defaultTheme?: IOStyle<T>, parentProps?: E): IOStyle<T> | undefined;
}

interface MergePartialPropsFn {
  <T = any>(overridingProps?: Partial<T>, componentDefaultProps?: Partial<T>): Partial<T> | undefined;
}

interface MergePropsFn {
  <T = any>(defaultProps: T, overridingProps?: Partial<T>): T;
}

export type { MergePartialPropsFn, MergePartialThemesFn, MergePropsFn, MergeThemesFn };
