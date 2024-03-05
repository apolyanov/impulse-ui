import { neutral } from '@impulse-ui/colours';
import { SidebarItemStyle, SidebarItemStyleProps } from '@impulse-ui/types';

const defaultSidebarItemStyle: Partial<SidebarItemStyle> = {
  buttonStyle: {
    iColorTheme: { light: { backgroundColor: neutral[10], backgroundColorHover: neutral[50] } },
    iCss: ({ iColorTheme, parentProps }) => ({
      justifyContent: 'flex-start',
      textTransform: 'capitalize',
      padding: '14px 28px',
      margin: '4px 0',
      textAlign: 'left',
      minWidth: 'fit-content',
      width: '100%',
      backgroundColor: parentProps?.active ? iColorTheme.backgroundColorHover : iColorTheme.backgroundColor,
    }),
  },
  iconStyle: {
    iCss: {
      marginRight: '4px',
    },
  },
  typographyStyle: { iCss: { display: 'inline-block' } },
};

const defaultSidebarItemStyleProps: Partial<SidebarItemStyleProps> = {
  buttonStyleProps: { hasDropShadow: false },
};

export { defaultSidebarItemStyle, defaultSidebarItemStyleProps };
