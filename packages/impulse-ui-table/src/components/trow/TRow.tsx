'use client';
import React, { FunctionComponent } from 'react';
import { extractCssProps } from '@impulse-ui/core';
import { TRowProps } from '@impulse-ui/types';

import { BaseTRow } from './BaseTRow.styles';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TRow };
