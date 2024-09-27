import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TableProps } from '../../types';
import { BaseTable } from './BaseTable.styles';

const Table: FunctionComponent<TableProps> = ({ iStyle, ...rest }) => {
  return <BaseTable $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Table };
