import { useComponentStyle } from '@impulse-ui/core';
import { Divider } from '@impulse-ui/layout';
import { FunctionComponent } from 'react';

import { sidebarSectionDividerComponentMap } from '../../../maps';
import { defaultSidebarSectionDividerStyle } from '../../../styles';
import { SidebarSectionDividerProps } from '../../../types';

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
