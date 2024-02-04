'use client';
import React from 'react';
import { FunctionComponent } from 'react';
import { TableProps } from '@impulse-ui/types';

import { BaseTable } from './BaseTable.styles';

const Table: FunctionComponent<TableProps> = ({ iProps, iStyle, parentProps, ...rest }) => {
  return <BaseTable $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { Table };
