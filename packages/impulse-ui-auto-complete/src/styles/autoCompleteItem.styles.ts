import { neutral } from '@impulse-ui/colours';
import { AutoCompleteItemStyle, AutoCompleteItemStyleProps, BackgroundColor } from '@impulse-ui/types';

const defaultAutoCompleteItemStyle: Partial<AutoCompleteItemStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { backgroundColor: 'transparent' } },
    iCss: ({ parentProps }) => ({
      padding: '6px',
      height: '34px',
      margin: 0,
      justifyContent: 'center',
      backgroundColor: getItemBackgroundColor(parentProps?.selected, parentProps?.highlighted),
      '&:hover': { backgroundColor: getItemBackgroundHoverColor(parentProps?.selected), cursor: 'pointer' },
    }),
  },
  typographyStyle: {
    iCss: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: 1.5 },
  },
};

const defaultAutoCompleteItemStyleProps: Partial<AutoCompleteItemStyleProps> = {
  mainContainerStyleProps: { hasBorderRadius: true },
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

export { defaultAutoCompleteItemStyle, defaultAutoCompleteItemStyleProps };
