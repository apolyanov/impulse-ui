import { ContainerStyleProps } from '../layout';
import { IOProps } from '../types';

import { BasicAutoCompleteStyle, BasicAutoCompleteStyleProps } from './types';

const defaultBasicAutoCompleteStyle: Partial<BasicAutoCompleteStyle> = {
  mainContainerStyle: {
    iCss: () => ({
      width: '100%',
      maxWidth: '250px',
      height: 'fit-content',
      display: 'block',
      position: 'relative',
    }),
  },
  autoCompleteItemsContainerStyle: {
    iCss: () => ({
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
    }),
  },
  loadingTypographyStyle: {
    iCss: () => ({ textAlign: 'center', padding: '4px' }),
  },
  noOptionsTypographyStyle: {
    iCss: () => ({ textAlign: 'center', padding: '4px' }),
  },
};

const defaultBasicAutoCompleteStyleProps: Partial<BasicAutoCompleteStyleProps> = {
  mainContainerStyleProps: { hasPadding: false, hasMargin: false },
  loadingTypographyStyleProps: { hasPadding: true },
  autoCompleteItemsContainerStyleProps: { hasDropShadow: true, hasBorderRadius: true },
};

const removeSpacing: IOProps<ContainerStyleProps> = { hasPadding: false, hasMargin: false };

export { defaultBasicAutoCompleteStyle, defaultBasicAutoCompleteStyleProps, removeSpacing };
