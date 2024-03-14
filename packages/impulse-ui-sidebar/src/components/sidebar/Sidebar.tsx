'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { SidebarProps } from '@impulse-ui/types';

import { sidebarComponentMap } from '../../maps';
import { defaultSidebarStyle } from '../../styles';

const Sidebar: FunctionComponent<PropsWithChildren<SidebarProps>> = ({ iStyle, children, ...rest }) => {
  const { containerStyle } = useComponentStyle(sidebarComponentMap, rest, defaultSidebarStyle, iStyle);

  return <Container iStyle={containerStyle}>{children}</Container>;
};

export { Sidebar };
