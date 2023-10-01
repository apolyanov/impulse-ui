import { UseSidebarStyleFn } from '../../../sidebar';
import { mainContainerStyle, mainContainerStyleProps } from '../../../sidebar/defaultSidebar.styles';
import { mergePartialProps, mergePartialThemes } from '../styleHelpers';

const useSidebarStyle: UseSidebarStyleFn = (iStyle, iProps) => {
  const containerStyle = mergePartialThemes(iStyle, mainContainerStyle);

  const containerStyleProps = mergePartialProps(iProps, mainContainerStyleProps);

  return { containerStyle, containerStyleProps };
};

export { useSidebarStyle };
