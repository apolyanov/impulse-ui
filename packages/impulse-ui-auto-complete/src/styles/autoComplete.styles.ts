import { AutoCompleteStyle, AutoCompleteStyleProps, ContainerStyleProps, IOProps } from '@impulse-ui/types';

const defaultAutoCompleteStyle: Partial<AutoCompleteStyle> = {
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
    iCss: {
      zIndex: 99,
      margin: 0,
      padding: '0 2px',
      display: 'block',
      maxHeight: '304px',
      overflowY: 'auto',
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

const defaultAutoCompleteStyleProps: Partial<AutoCompleteStyleProps> = {
  mainContainerStyleProps: { hasPadding: false, hasMargin: false },
  loadingTypographyStyleProps: { hasPadding: true },
  autoCompleteItemsContainerStyleProps: { hasDropShadow: true, hasBorderRadius: true },
};

const removeSpacing: IOProps<ContainerStyleProps> = { hasPadding: false, hasMargin: false };

export { defaultAutoCompleteStyle, defaultAutoCompleteStyleProps, removeSpacing };
