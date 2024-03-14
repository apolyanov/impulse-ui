'use client';
import React, { FunctionComponent } from 'react';
import { TRowProps } from '@impulse-ui/types';

import { BaseTRow } from './BaseTRow.styles';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} {...rest} />;
};

export { TRow };
