import { neutral } from '@impulse-ui/colours';
import { AutoCompleteItemStyle, BackgroundColor } from '@impulse-ui/types';

const defaultAutoCompleteItemStyle: Partial<AutoCompleteItemStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { backgroundColor: 'transparent' } },
    iCss: ({ parentProps }) => ({
      padding: '6px',
      height: '34px',
      borderRadius: 4,
      backgroundColor: getItemBackgroundColor(parentProps?.selected, parentProps?.highlighted),
      '&:hover': { backgroundColor: getItemBackgroundHoverColor(parentProps?.selected), cursor: 'pointer' },
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
