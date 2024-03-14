'use client';
import React, { FunctionComponent } from 'react';
import { TDataProps } from '@impulse-ui/types';

import { BaseTData } from './BaseTData.styles';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  return <BaseTData $iStyle={iStyle} {...rest} />;
};

export { TData };
