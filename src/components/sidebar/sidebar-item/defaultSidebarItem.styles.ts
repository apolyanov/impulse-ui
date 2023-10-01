import { ButtonStyleProps } from '../../buttons';
import { neutral1, neutral5 } from '../../theme';
import { IOProps, IOStyle } from '../../types';
import { SidebarItemRestProps } from '../types';

const sidebarItemButtonStyle: IOStyle<ButtonStyleProps, SidebarItemRestProps> = {
  iColorTheme: { light: { backgroundColor: neutral1, backgroundColorHover: neutral5 } },
  iCss: (iColorTheme, iProps, parentProps) => ({
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    padding: '14px 28px',
    margin: '4px 0',
    textAlign: 'left',
    minWidth: 'fit-content',
    width: '100%',
    backgroundColor: parentProps?.active ? iColorTheme.backgroundColorHover : iColorTheme.backgroundColor,
  }),
};

const sidebarItemIconStyle: IOStyle = {
  iCss: () => ({
    marginRight: '4px',
  }),
};

const sidebarItemTypographyStyle: IOStyle = { iCss: () => ({ display: 'inline-block' }) };

const sidebarItemButtonStyleProps: IOProps<ButtonStyleProps> = { hasDropShadow: false };

export { sidebarItemButtonStyle, sidebarItemButtonStyleProps, sidebarItemIconStyle, sidebarItemTypographyStyle };
