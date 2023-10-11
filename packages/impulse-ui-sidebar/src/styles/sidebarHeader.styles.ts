import { neutral1, neutral5 } from '@impulse-ui/colours';
import { SidebarHeaderStyle, SidebarHeaderStyleProps } from '@impulse-ui/types';

const defaultSidebarHeaderStyle: Partial<SidebarHeaderStyle> = {
  buttonStyle: {
    iColorTheme: { light: { backgroundColor: neutral1, backgroundColorHover: neutral5 } },
    iCss: () => ({ textTransform: 'capitalize', width: '100%', margin: '4px 0' }),
  },
  iconStyle: { iCss: () => ({ marginRight: '4px' }) },
  typographyStyle: { iCss: () => ({ display: 'inline-block' }) },
};

const defaultSidebarHeaderStyleProps: Partial<SidebarHeaderStyleProps> = {
  buttonStyleProps: { hasDropShadow: false },
};

export { defaultSidebarHeaderStyle, defaultSidebarHeaderStyleProps };
