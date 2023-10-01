import React, { FunctionComponent } from 'react';

import { Container } from '../layout';
import { useSidebarStyle } from '../utils';

import { SidebarProps } from './types';

const Sidebar: FunctionComponent<SidebarProps> = ({ iStyle, iProps, children }) => {
  const { containerStyle, containerStyleProps } = useSidebarStyle(
    iStyle?.sidebarContainerStyle,
    iProps?.sidebarContainerStyleProps,
  );

  return (
    <Container iProps={containerStyleProps} iStyle={containerStyle}>
      {children}
    </Container>
  );
};

export { Sidebar };
