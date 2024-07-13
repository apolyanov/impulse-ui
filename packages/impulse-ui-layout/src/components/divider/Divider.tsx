import { extractCssProps } from '@impulse-ui/core';
import { DividerProps } from '@impulse-ui/types';
import React from 'react';
import { FunctionComponent } from 'react';

import BaseDivider from './BaseDivider.styles';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, ...rest }) => {
  return <BaseDivider $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Divider };
