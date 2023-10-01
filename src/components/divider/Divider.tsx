import React from 'react';
import { FunctionComponent } from 'react';

import BaseDivider from './BaseDivider.styles';
import { DividerProps } from './types';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, iProps, parentProps }) => {
  return <BaseDivider $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} />;
};

export { Divider };
