import { neutral } from '@impulse-ui/colours';
import { SidebarItemRestProps, SidebarItemStyle } from '../types';

const defaultSidebarItemStyle: Partial<SidebarItemStyle<SidebarItemRestProps>> = {
  buttonStyle: {
    iTheme: {
      light: {
        backgroundColor: neutral[10],
        color: neutral[200],
        ':hover': { backgroundColor: neutral[40], color: neutral[200] },
      },
    },
    iCss: ({ getThemeColor, active }) => ({
      justifyContent: 'flex-start',
      textTransform: 'capitalize',
      padding: '14px 28px',
      margin: '4px 0',
      textAlign: 'left',
      filter: 'unset',
      minWidth: 'fit-content',
      width: '100%',
      height: 46,
      backgroundColor: active ? getThemeColor('backgroundColor', ':hover') : getThemeColor('backgroundColor'),
    }),
  },
  iconStyle: {
    iCss: ({ collapsed }) => ({
      marginRight: collapsed ? 0 : 4,
    }),
  },
};

export { defaultSidebarItemStyle };
