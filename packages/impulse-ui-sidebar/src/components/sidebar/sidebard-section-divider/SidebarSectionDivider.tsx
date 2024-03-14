'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Divider } from '@impulse-ui/layout';
import { SidebarSectionDividerProps } from '@impulse-ui/types';

import { sidebarSectionDividerComponentMap } from '../../../maps';
import { defaultSidebarSectionDividerStyle } from '../../../styles';

const SidebarSectionDivider: FunctionComponent<SidebarSectionDividerProps> = ({ iStyle, ...rest }) => {
  const { dividerStyle } = useComponentStyle(
    sidebarSectionDividerComponentMap,
    rest,
    defaultSidebarSectionDividerStyle,
    iStyle,
  );

  return <Divider iStyle={dividerStyle} />;
};

export { SidebarSectionDivider };
