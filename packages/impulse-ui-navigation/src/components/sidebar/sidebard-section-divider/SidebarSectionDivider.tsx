import { mergePartialThemes } from '@impulse-ui/core';
import { Divider } from '@impulse-ui/layout';
import { FunctionComponent } from 'react';

import { defaultSidebarSectionDividerStyle } from '../../../styles';
import { SidebarSectionDividerProps } from '../../../types';

const SidebarSectionDivider: FunctionComponent<SidebarSectionDividerProps> = ({ iStyle, ...rest }) => {
  const dividerStyle = mergePartialThemes({
    defaultTheme: defaultSidebarSectionDividerStyle,
    overridingTheme: iStyle,
    props: rest,
  });

  return <Divider iCss={dividerStyle.iCss} iTheme={dividerStyle.iTheme} />;
};

export { SidebarSectionDivider };
