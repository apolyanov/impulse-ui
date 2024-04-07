import { neutral } from '@impulse-ui/colours';
import { AutoCompleteStyle } from '@impulse-ui/types';

const defaultAutoCompleteStyle: Partial<AutoCompleteStyle<any>> = {
  mainContainerStyle: {
    iCss: {
      width: '100%',
      maxWidth: '250px',
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
    iCss: {
      zIndex: 99,
      padding: '0 2px',
      display: 'block',
      maxHeight: '304px',
      overflowY: 'auto',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '&[data-popper-reference-hidden=true]': {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    },
  },
  loadingTypographyStyle: {
    iCss: { textAlign: 'center', padding: '4px' },
  },
  noOptionsTypographyStyle: {
    iCss: { textAlign: 'center', padding: '4px' },
  },
};

export { defaultAutoCompleteStyle };
