import { IOStyle, IStyle } from '../../../types';

interface MergeThemesFn {
  <T = any, E = any>(defaultTheme: IStyle<T>, overridingTheme?: IOStyle<T>, parentProps?: E): IStyle<T>;
}

interface MergePartialThemesFn {
  <T = any, E = any>(overridingTheme?: IOStyle<T>, defaultTheme?: IOStyle<T>, parentProps?: E): IOStyle<T> | undefined;
}

interface MergePartialProps {
  <T = any>(overridingProps?: Partial<T>, componentDefaultProps?: Partial<T>): Partial<T> | undefined;
}

interface MergeProps {
  <T = any>(defaultProps: T, overridingProps?: Partial<T>): T;
}

export type { MergePartialProps, MergePartialThemesFn, MergeProps, MergeThemesFn };
