import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TableProps } from '../../types';
import { BaseTable } from './BaseTable.styles.tsx';

const Table: FunctionComponent<TableProps> = ({ iStyle, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTable $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
};

export { Table };
