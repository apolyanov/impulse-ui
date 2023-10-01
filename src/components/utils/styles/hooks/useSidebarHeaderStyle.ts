import { UseSidebarHeaderStyleFn } from '../../../sidebar';
import {
  sidebarHeaderButtonStyle,
  sidebarHeaderButtonStyleProps,
  sidebarHeaderIconStyle,
  sidebarHeaderTypographyStyle,
} from '../../../sidebar/sidebar-header/defaultSidebarHeader.styles';
import { mergePartialProps, mergePartialThemes } from '../styleHelpers';

const useSidebarHeaderStyle: UseSidebarHeaderStyleFn = (rest, iStyle, iProps) => {
  const buttonStyle = mergePartialThemes(iStyle?.buttonStyle, sidebarHeaderButtonStyle, rest);

  const buttonStyleProps = mergePartialProps(iProps?.buttonStyleProps, sidebarHeaderButtonStyleProps);

  const iconStyle = mergePartialThemes(iStyle?.iconStyle, sidebarHeaderIconStyle, rest);

  const iconStyleProps = mergePartialProps(iProps?.iconStyleProps);

  const typographyStyle = mergePartialThemes(iStyle?.typographyStyle, sidebarHeaderTypographyStyle, rest);

  const typographyStyleProps = mergePartialProps(iProps?.typographyStyleProps);

  return { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps };
};

export { useSidebarHeaderStyle };
