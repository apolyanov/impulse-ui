import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TableProps } from '../../types';
import { BaseTable } from './BaseTable.styles.tsx';

const Table: FunctionComponent<TableProps> = ({ iCss, iTheme, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTable $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
};

export { Table };
