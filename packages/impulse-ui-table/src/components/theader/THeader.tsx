'use client';
import React, { FunctionComponent } from 'react';
import { extractCssProps } from '@impulse-ui/core';
import { THeaderProps } from '@impulse-ui/types';

import { BaseTHeader } from './BaseTHeader.styles';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, ...rest }) => {
  return <BaseTHeader $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { THeader };
