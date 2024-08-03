import { neutral } from '@impulse-ui/colours';
import { SidebarSectionDividerStyle } from '../types';

const defaultSidebarSectionDividerStyle: Partial<SidebarSectionDividerStyle> = {
  dividerStyle: {
    iColorTheme: { light: { borderColor: neutral[50] } },
    iCss: { margin: '4px 0' },
  },
};

export { defaultSidebarSectionDividerStyle };
