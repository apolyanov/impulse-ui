import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, THeadStyle, THeadStyleProps, TSegmentStyleProps } from '@impulse-ui/types';

const thead: Partial<THeadStyle> = {
  trowStyle: {
    iCss: {
      '&:hover [data-table-element="column-header"]': {
        borderRight: `1px solid ${neutral[60]}`,
        borderLeft: `1px solid ${neutral[60]}`,
      },
      '&:hover [data-table-element="column-header-first"]': {
        borderRight: `1px solid ${neutral[60]}`,
      },
      '&:hover [data-table-element="column-header-last"]': {
        borderLeft: `1px solid ${neutral[60]}`,
      },
    },
  },
  theaderStyle: {
    iCss: {
      '& > [data-table-element^="column-header"] > [data-button-type="sorting-button"]': {
        opacity: '0',
      },
      '&:hover > [data-table-element^="column-header"] > [data-button-type="sorting-button"]': {
        opacity: '1',
      },
    },
  },
  theaderTypographyStyle: {
    iCss: {
      fontSize: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 8,
      paddingLeft: 8,
      marginTop: 8,
      marginBottom: 8,
      border: '1px solid transparent',
      gap: 8,
    },
  },
  theaderSortButtonStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: 'transparent',
          backgroundColorHover: neutral[40],
        },
      },
      iCss: {
        margin: 0,
        height: '24px',
        width: '24px',
        minHeight: 'unset',
      },
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral[60],
          colorHover: neutral[60],
        },
      },
    },
  },
};

const theadProps: Partial<THeadStyleProps> = {
  theaderSortButtonStyleProps: {
    buttonStyleProps: {
      hasDropShadow: false,
    },
  },
  theaderTypographyStyleProps: {
    hasMargin: true,
    hasPadding: true,
  },
};

const baseTHead: ComponentTheme<TSegmentStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 4),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      '& th:first-of-type': {
        borderRadius: '4px 0 0 4px',
      },
      '& th:last-of-type': {
        borderRadius: '0 4px 4px 0',
      },
    }),
  },
  iStyleProps: {
    hasBorderRadius: true,
    hasPadding: true,
    hasMargin: true,
    hasDropShadow: true,
  },
};

export { baseTHead, thead, theadProps };
