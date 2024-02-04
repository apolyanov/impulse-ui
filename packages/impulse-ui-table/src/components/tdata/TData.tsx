'use client';
import React, { FunctionComponent } from 'react';
import { TDataProps } from '@impulse-ui/types';

import { BaseTData } from './BaseTData.styles';

const TData: FunctionComponent<TDataProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTData $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { TData };
