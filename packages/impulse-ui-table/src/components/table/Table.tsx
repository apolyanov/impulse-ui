import { extractCssProps } from '@impulse-ui/core';
import React from 'react';
import { FunctionComponent } from 'react';

import { BaseTable } from './BaseTable.styles';
import { TableProps } from '../../types';

const Table: FunctionComponent<TableProps> = ({ iStyle, ...rest }) => {
  return <BaseTable $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Table };
