import { IOStyle, IStyle } from '../theme';

interface MergeThemesFn {
  <T = any, K = any>(defaultTheme: IStyle<T, K>, overridingTheme?: IOStyle<T, K>, parentProps?: K): IStyle<T, K>;
}

interface MergePartialThemesFn {
  <T = any, K = any>(overridingTheme?: IOStyle<T, K>, defaultTheme?: IOStyle<T, K>, parentProps?: K):
    | IOStyle<T, K>
    | undefined;
}

interface MergePartialPropsFn {
  <T = any>(overridingProps?: Partial<T>, componentDefaultProps?: Partial<T>): Partial<T> | undefined;
}

interface MergePropsFn {
  <T = any>(defaultProps: T, overridingProps?: Partial<T>): T;
}

export type { MergePartialPropsFn, MergePartialThemesFn, MergePropsFn, MergeThemesFn };
