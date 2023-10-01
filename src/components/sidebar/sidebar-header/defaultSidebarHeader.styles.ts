import { ButtonStyleProps } from '../../buttons';
import { neutral1, neutral5 } from '../../theme';
import { IOProps, IOStyle } from '../../types';

const sidebarHeaderButtonStyle: IOStyle = {
  iColorTheme: { light: { backgroundColor: neutral1, backgroundColorHover: neutral5 } },
  iCss: () => ({ textTransform: 'capitalize', width: '100%', margin: '4px 0' }),
};

const sidebarHeaderIconStyle: IOStyle = { iCss: () => ({ marginRight: '4px' }) };

const sidebarHeaderTypographyStyle: IOStyle = { iCss: () => ({ display: 'inline-block' }) };

const sidebarHeaderButtonStyleProps: IOProps<ButtonStyleProps> = { hasDropShadow: false };

export {
  sidebarHeaderButtonStyle,
  sidebarHeaderButtonStyleProps,
  sidebarHeaderIconStyle,
  sidebarHeaderTypographyStyle,
};
