import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Divider } from '@impulse-ui/layout';
import { SidebarSectionDividerProps } from '@impulse-ui/types';

import { sidebarSectionDividerComponentMap } from '../../../maps';
import { defaultSidebarSectionDividerStyle } from '../../../styles';

const SidebarSectionDivider: FunctionComponent<SidebarSectionDividerProps> = ({ iStyle, iProps, ...rest }) => {
  const { dividerStyle, dividerStyleProps } = useComponentStyle(
    sidebarSectionDividerComponentMap,
    rest,
    defaultSidebarSectionDividerStyle,
    undefined,
    iStyle,
    iProps,
  );

  return <Divider iStyle={dividerStyle} iProps={dividerStyleProps} />;
};

export { SidebarSectionDivider };
