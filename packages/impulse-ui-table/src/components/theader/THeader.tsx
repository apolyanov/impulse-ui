'use client';
import React, { FunctionComponent } from 'react';
import { THeaderProps } from '@impulse-ui/types';

import { BaseTHeader } from './BaseTHeader.styles';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, ...rest }) => {
  return <BaseTHeader $iStyle={iStyle} {...rest} />;
};

export { THeader };
