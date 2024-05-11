import { neutral, volcano } from '@impulse-ui/colours';
import { AutoCompleteStyle } from '@impulse-ui/types';

const defaultAutoCompleteStyle: Partial<AutoCompleteStyle<any>> = {
  mainContainerStyle: {
    iCss: {
      width: '100%',
      maxWidth: 250,
      height: 'fit-content',
      display: 'block',
      position: 'relative',
    },
  },
  autoCompleteItemsContainerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
      },
    },
    iCss: ({ loading }) => ({
      zIndex: 99,
      padding: loading ? 8 : '0 2px',
      display: 'block',
      maxHeight: 304,
      overflowY: loading ? 'hidden' : 'auto',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '&[data-popper-reference-hidden=true]': {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    }),
  },
  loadingSpinnerStyle: {
    iColorTheme: {
      light: {
        borderColor: volcano[60],
        borderColorHover: volcano[60],
      },
    },
    iCss: {
      margin: 'auto',
    },
  },
  noOptionsTypographyStyle: {
    iCss: { textAlign: 'center', padding: 8 },
  },
};

export { defaultAutoCompleteStyle };
