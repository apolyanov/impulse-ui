import { neutral } from '@impulse-ui/colours';
import { IOStyle } from '@impulse-ui/core';
import { SidebarRestProps } from '../types';

const defaultSidebarStyle: IOStyle<SidebarRestProps> = {
  iTheme: {
    light: {
      backgroundColor: neutral[10],
    },
  },
  iCss: ({ collapsed }) => ({
    maxWidth: 300,
    minWidth: 'fit-content',
    width: collapsed ? 46 : 220,
    height: '100vh',
    padding: '2px 8px',
    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
    alignItems: 'center',
    overflow: 'hidden',
  }),
};

export { defaultSidebarStyle };
