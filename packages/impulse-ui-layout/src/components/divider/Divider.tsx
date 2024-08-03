import { extractCssProps } from '@impulse-ui/core';
import { DividerProps } from '../../types';
import React from 'react';
import { FunctionComponent } from 'react';

import { BaseDivider } from '../divider';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, ...rest }) => {
  return <BaseDivider $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Divider };
