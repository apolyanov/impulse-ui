import { neutral } from '@impulse-ui/colours';
import { SidebarStyle } from '@impulse-ui/types';

const defaultSidebarStyle: Partial<SidebarStyle> = {
  containerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
      },
    },
    iCss: {
      maxWidth: 300,
      minWidth: 'fit-content',
      width: 220,
      height: '100vh',
      padding: '2px 8px',
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      alignItems: 'center',
    },
  },
};

export { defaultSidebarStyle };
