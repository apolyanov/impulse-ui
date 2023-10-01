import React, { FunctionComponent } from 'react';

import { Divider } from '../../divider';
import { useSidebarSectionDividerStyle } from '../../utils';
import { SidebarSectionDividerProps } from '../types';

const SidebarSectionDivider: FunctionComponent<SidebarSectionDividerProps> = ({ iStyle, iProps }) => {
  const { dividerStyle, dividerStyleProps } = useSidebarSectionDividerStyle(iStyle, iProps);

  return <Divider iStyle={dividerStyle} iProps={dividerStyleProps} />;
};

export { SidebarSectionDivider };
