import React from 'react';
import { FunctionComponent } from 'react';
import { DividerProps } from '@impulse-ui/types';

import BaseDivider from './BaseDivider.styles';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, iProps, parentProps }) => {
  return <BaseDivider $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} />;
};

export { Divider };
