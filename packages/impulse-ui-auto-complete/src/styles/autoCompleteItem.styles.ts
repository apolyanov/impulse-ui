import { neutral } from '@impulse-ui/colours';
import { AutoCompleteItemStyle } from '../types';
import { BackgroundColor } from '@impulse-ui/core';

const defaultAutoCompleteItemStyle: Partial<AutoCompleteItemStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { backgroundColor: 'transparent' } },
    iCss: ({ selected, highlighted }) => ({
      padding: '6px',
      height: '34px',
      borderRadius: 4,
      backgroundColor: getItemBackgroundColor(selected, highlighted),
      '&:hover': { backgroundColor: getItemBackgroundHoverColor(selected), cursor: 'pointer' },
    }),
  },
  typographyStyle: {
    iCss: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: 1.5 },
  },
};

const getItemBackgroundHoverColor = (selected?: boolean) => {
  if (selected) {
    return neutral[50];
  }

  return neutral[30];
};

const getItemBackgroundColor = (selected?: boolean, highlighted?: boolean): BackgroundColor => {
  if (selected) {
    return neutral[50];
  }

  if (highlighted) {
    return neutral[30];
  }

  return 'transparent';
};

export { defaultAutoCompleteItemStyle };
