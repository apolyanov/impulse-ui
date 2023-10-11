import { neutral5 } from '@impulse-ui/colours';
import { SidebarSectionDividerStyle } from '@impulse-ui/types';

const defaultSidebarSectionDividerStyle: Partial<SidebarSectionDividerStyle> = {
  dividerStyle: {
    iColorTheme: { light: { borderColor: neutral5 } },
    iCss: () => ({ margin: '4px 0' }),
  },
};

export { defaultSidebarSectionDividerStyle };
