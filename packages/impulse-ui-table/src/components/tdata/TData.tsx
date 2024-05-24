'use client';
import React, { FunctionComponent } from 'react';
import { extractCssProps } from '@impulse-ui/core';
import { TDataProps } from '@impulse-ui/types';

import { BaseTData } from './BaseTData.styles';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  return <BaseTData $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TData };
