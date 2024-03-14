'use client';
import React from 'react';
import { FunctionComponent } from 'react';
import { TableProps } from '@impulse-ui/types';

import { BaseTable } from './BaseTable.styles';

const Table: FunctionComponent<TableProps> = ({ iStyle, ...rest }) => {
  return <BaseTable $iStyle={iStyle} {...rest} />;
};

export { Table };
