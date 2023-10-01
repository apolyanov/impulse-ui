import { Property } from 'csstype';

import { neutral3, neutral5 } from '../../theme';
import { BasicAutoCompleteItemStyle, BasicAutoCompleteItemStyleProps } from '../types';

const defaultBasicAutoCompleteItemStyle: Partial<BasicAutoCompleteItemStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { backgroundColor: 'transparent' } },
    iCss: (iColorTheme, iProps, parentProps) => ({
      padding: '6px',
      height: '34px',
      margin: 0,
      justifyContent: 'center',
      backgroundColor: getItemBackgroundColor(parentProps?.selected, parentProps?.highlighted),
      '&:hover': { backgroundColor: getItemBackgroundHoverColor(parentProps?.selected), cursor: 'pointer' },
    }),
  },
  typographyStyle: {
    iCss: () => ({ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: 1.5 }),
  },
};

const defaultBasicAutoCompleteItemStyleProps: Partial<BasicAutoCompleteItemStyleProps> = {
  mainContainerStyleProps: { hasBorderRadius: true },
};

const getItemBackgroundHoverColor = (selected?: boolean) => {
  if (selected) {
    return neutral5;
  }

  return neutral3;
};

const getItemBackgroundColor = (selected?: boolean, highlighted?: boolean): Property.BackgroundColor => {
  if (selected) {
    return neutral5;
  }

  if (highlighted) {
    return neutral3;
  }

  return 'transparent';
};

export { defaultBasicAutoCompleteItemStyle, defaultBasicAutoCompleteItemStyleProps };
