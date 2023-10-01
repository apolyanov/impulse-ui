import { UseSidebarItemStyleFn } from '../../../sidebar';
import {
  sidebarItemButtonStyle,
  sidebarItemButtonStyleProps,
  sidebarItemIconStyle,
  sidebarItemTypographyStyle,
} from '../../../sidebar/sidebar-item/defaultSidebarItem.styles';
import { mergePartialProps, mergePartialThemes } from '../styleHelpers';

const useSidebarItemStyle: UseSidebarItemStyleFn = (rest, iStyle, iProps) => {
  const buttonStyle = mergePartialThemes(iStyle?.buttonStyle, sidebarItemButtonStyle, rest);

  const buttonStyleProps = mergePartialProps(iProps?.buttonStyleProps, sidebarItemButtonStyleProps);

  const iconStyle = mergePartialThemes(iStyle?.iconStyle, sidebarItemIconStyle, rest);

  const iconStyleProps = mergePartialProps(iProps?.iconStyleProps);

  const typographyStyle = mergePartialThemes(iStyle?.typographyStyle, sidebarItemTypographyStyle, rest);

  const typographyStyleProps = mergePartialProps(iProps?.typographyStyleProps);

  return { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps };
};

export { useSidebarItemStyle };
