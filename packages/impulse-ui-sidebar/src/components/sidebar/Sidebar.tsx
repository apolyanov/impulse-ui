import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { SidebarProps } from '@impulse-ui/types';

import { defaultSidebarStyle, defaultSidebarStyleProps } from '../../styles';

import { sidebarComponentMap } from './theme.map';

const Sidebar: FunctionComponent<SidebarProps> = ({ iStyle, iProps, children, ...rest }) => {
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
