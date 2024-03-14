import { neutral } from '@impulse-ui/colours';
import { SidebarItemStyle } from '@impulse-ui/types';

const defaultSidebarItemStyle: Partial<SidebarItemStyle> = {
  buttonStyle: {
    iColorTheme: { light: { backgroundColor: neutral[10], backgroundColorHover: neutral[40] } },
    iCss: ({ iColorTheme, parentProps }) => ({
      justifyContent: 'flex-start',
      textTransform: 'capitalize',
      padding: '14px 28px',
      margin: '4px 0',
      textAlign: 'left',
      filter: 'unset',
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

export { defaultSidebarItemStyle };
