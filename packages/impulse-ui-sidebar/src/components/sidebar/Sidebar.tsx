'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { SidebarProps } from '@impulse-ui/types';

import { sidebarComponentMap } from '../../maps';
import { defaultSidebarStyle, defaultSidebarStyleProps } from '../../styles';

const Sidebar: FunctionComponent<PropsWithChildren<SidebarProps>> = ({ iStyle, iProps, children, ...rest }) => {
  const { containerStyle, containerStyleProps } = useComponentStyle(
    sidebarComponentMap,
    rest,
    defaultSidebarStyle,
    defaultSidebarStyleProps,
    iStyle,
    iProps,
  );

  return (
    <Container iProps={containerStyleProps} iStyle={containerStyle}>
      {children}
    </Container>
  );
};

export { Sidebar };
