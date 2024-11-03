import { extractCssProps, useStyle } from '@impulse-ui/core';

import { TableProps } from '../../types';
import { BaseTable } from './BaseTable.styles.tsx';
import { useImpulseTable } from '../../hooks';
import { table } from '../../styles';

const Table = ({ iCss, iTheme, ...rest }: TableProps) => {
  const tableProps = useImpulseTable();
  const { cssProps, componentProps } = extractCssProps(rest);
  const iStyle = useStyle({ tableProps, ...rest }, table, iCss, iTheme);

  return (
    <BaseTable
      $iCss={iStyle.iCss}
      $iTheme={iStyle.iTheme}
      $tableProps={tableProps}
      $cssProps={cssProps}
      {...componentProps}
    />
  );
};

export { Table };
