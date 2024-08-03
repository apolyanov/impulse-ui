import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { FunctionComponent, PropsWithChildren } from 'react';

import { sidebarComponentMap } from '../../maps';
import { defaultSidebarStyle } from '../../styles';
import { SidebarProps } from '../../types';

const Sidebar: FunctionComponent<PropsWithChildren<SidebarProps>> = ({ iStyle, children, ...rest }) => {
  const { containerStyle } = useComponentStyle(sidebarComponentMap, rest, defaultSidebarStyle, iStyle);

  return <Container iStyle={containerStyle}>{children}</Container>;
};

export { Sidebar };
