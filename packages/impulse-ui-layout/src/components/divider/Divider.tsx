import { extractCssProps } from '@impulse-ui/core';
import React from 'react';
import { FunctionComponent } from 'react';
import { DividerProps } from '../../types';

import { BaseDivider } from '../divider';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, ...rest }) => {
  return <BaseDivider $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Divider };
