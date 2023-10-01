import { UseSidebarSectionDividerFn } from '../../../sidebar';
import { sidebarSectionDividerStyles } from '../../../sidebar/sidebard-section-divider/defaultSidebarSectionDivider.styles';
import { mergePartialProps, mergePartialThemes } from '../styleHelpers';

const useSidebarSectionDividerStyle: UseSidebarSectionDividerFn = (iStyle, iProps) => {
  const dividerStyle = mergePartialThemes(iStyle, sidebarSectionDividerStyles);
  const dividerStyleProps = mergePartialProps(iProps);

  return { dividerStyle, dividerStyleProps };
};

export { useSidebarSectionDividerStyle };
