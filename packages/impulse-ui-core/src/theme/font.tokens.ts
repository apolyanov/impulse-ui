import { FluidFontSizes, FontSizes, FontWeights, LetterSpacings, LineHeights } from '../types';

export const fontSizes: FontSizes = {
  xxs: '0.5rem',
  xs: '0.75rem',
  sm: '1rem',
  md: '1.1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '2.5rem',
  huge: '3rem',
  massive: '3.5rem',
};

export const lineHeights: LineHeights = {
  xxs: '0.95',
  xs: '1.1',
  sm: '1.25',
  md: '1.375',
  lg: '1.5',
  xl: '1.75',
  xxl: '2',
};

export const letterSpacings: LetterSpacings = {
  tightest: '-.05em',
  tighter: '.025em',
  tight: '.050em',
  normal: '.075em',
  wide: '.150em',
  wider: '.500em',
  widest: '.750em',
  ultraWide: '1em',
};

export const fluidFontSizes: FluidFontSizes = {
  xs: 'clamp(.75rem, 2vw, 1rem)',
  sm: 'clamp(1rem, 4vw, 1.5rem)',
  md: 'clamp(1.5rem, 6vw, 2.5rem)',
  lg: 'clamp(2rem, 9vw, 3.5rem)',
};

export const fontWeights: FontWeights = {
  thin: ' 100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};
