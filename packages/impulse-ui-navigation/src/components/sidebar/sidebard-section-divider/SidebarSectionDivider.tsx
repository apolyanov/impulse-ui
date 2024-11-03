import { useStyle } from '@impulse-ui/core';
import { Divider } from '@impulse-ui/layout';
import { FunctionComponent } from 'react';

import { defaultSidebarSectionDividerStyle } from '../../../styles';
import { SidebarSectionDividerProps } from '../../../types';

const SidebarSectionDivider: FunctionComponent<SidebarSectionDividerProps> = ({ iCss, iTheme, ...rest }) => {
  const iStyle = useStyle(rest, defaultSidebarSectionDividerStyle, iCss, iTheme);

  return <Divider iCss={iStyle?.iCss} iTheme={iStyle?.iTheme} />;
};

export { SidebarSectionDivider };
