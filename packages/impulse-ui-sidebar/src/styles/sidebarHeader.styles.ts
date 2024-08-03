import { neutral } from '@impulse-ui/colours';
import { SidebarHeaderStyle } from '../types';

const defaultSidebarHeaderStyle: Partial<SidebarHeaderStyle> = {
  buttonStyle: {
    iColorTheme: { light: { backgroundColor: neutral[10], ':hover': { backgroundColor: neutral[50] } } },
    iCss: { textTransform: 'capitalize', width: '100%', margin: '4px 0', filter: 'unset' },
  },
  iconStyle: { iCss: { marginRight: '4px' } },
  typographyStyle: { iCss: { display: 'inline-block' } },
};

export { defaultSidebarHeaderStyle };
