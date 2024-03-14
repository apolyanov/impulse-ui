'use client';
import React from 'react';
import { FunctionComponent } from 'react';
import { DividerProps } from '@impulse-ui/types';

import BaseDivider from './BaseDivider.styles';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, ...rest }) => {
  return <BaseDivider $iStyle={iStyle} {...rest} />;
};

export { Divider };
