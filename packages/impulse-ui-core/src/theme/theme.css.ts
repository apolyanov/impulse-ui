import { createGlobalTheme } from '@vanilla-extract/css';
import { gray } from './colors.tokens.ts';
import { fontSizes, fontWeights, letterSpacings, lineHeights } from './font.tokens.ts';
import { shadows } from './shadow.tokens.ts';
import { space } from './space.tokens.ts';

export const vars = createGlobalTheme(':root', {
  space,
  color: {},
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    headings: {
      h1: {
        fontSize: fontSizes.massive,
        lineHeight: lineHeights.xl,
        fontWeight: fontWeights.bold,
        letterSpacing: letterSpacings.tight,
      },
      h2: {
        fontSize: fontSizes.huge,
        lineHeight: lineHeights.xl,
        fontWeight: fontWeights.semiBold,
        letterSpacing: letterSpacings.tight,
      },
      h3: {
        fontSize: fontSizes.xxxl,
        lineHeight: lineHeights.lg,
        fontWeight: fontWeights.semiBold,
        letterSpacing: letterSpacings.normal,
      },
      h4: {
        fontSize: fontSizes.xxl,
        lineHeight: lineHeights.lg,
        fontWeight: fontWeights.medium,
        letterSpacing: letterSpacings.normal,
      },
      h5: {
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.md,
        fontWeight: fontWeights.medium,
        letterSpacing: letterSpacings.normal,
      },
      h6: {
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.md,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacings.normal,
      },
    },
    paragraphs: {
      default: {
        fontSize: fontSizes.md,
        lineHeight: lineHeights.md,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacings.normal,
      },
      small: {
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.sm,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacings.normal,
      },
      large: {
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.lg,
        fontWeight: fontWeights.medium,
        letterSpacing: letterSpacings.normal,
      },
    },
    captions: {
      default: {
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.xs,
        fontWeight: fontWeights.light,
        letterSpacing: letterSpacings.tighter,
      },
      small: {
        fontSize: fontSizes.xxs,
        lineHeight: lineHeights.xxs,
        fontWeight: fontWeights.light,
        letterSpacing: letterSpacings.tighter,
      },
    },
  },
  boxShadow: shadows(gray['10']),
});
