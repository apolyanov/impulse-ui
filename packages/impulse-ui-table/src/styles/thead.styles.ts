import { neutral } from '@impulse-ui/colours';
import { marginY, paddingX } from '@impulse-ui/core';
import { ComponentTheme, THeadHTMLProps, THeadStyle } from '@impulse-ui/types';

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
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      height: 'calc(100% - 16px)',
      gap: 4,
      ...paddingX(8),
      ...marginY(8),
      border: '1px solid transparent',
    },
  },
  theaderSortButtonStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral[10],
          ':hover': {
            backgroundColor: neutral[40],
          },
          ':disabled': {
            backgroundColor: neutral[40],
          },
        },
      },
      iCss: {
        filter: 'unset',
        margin: 0,
        height: 20,
        width: 20,
        flexShrink: 0,
        marginLeft: 'auto',
        minHeight: 'unset',
      },
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral[60],
          ':hover': {
            color: neutral[60],
          },
          ':disabled': {
            color: neutral[60],
          },
        },
      },
    },
  },
};

const baseTHead: ComponentTheme<THeadHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        borderColor: 'transparent',
        color: neutral[200],
      },
      dark: {
        backgroundColor: neutral[10],
        borderColor: 'transparent',
        color: neutral[200],
      },
    },
    iCss: ({ getThemeColor }) => ({
      backgroundColor: getThemeColor('backgroundColor'),
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '& th:first-of-type': {
        borderRadius: '4px 0 0 4px',
      },
      '& th:last-of-type': {
        borderRadius: '0 4px 4px 0',
      },
    }),
  },
};

export { baseTHead, thead };
