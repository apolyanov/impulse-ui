import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { extractCssProps } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { TBodyComponentProps } from '../../types';
import { BaseTBody } from './BaseTBody.styles.tsx';

const TBody = ({ ...rest }: TBodyComponentProps) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const tableProps = useImpulseTable();

  if (tableProps.showNoData()) {
    return (
      <BaseTBody $cssProps={cssProps} $tableProps={tableProps} {...componentProps}>
        {tableProps.loading && <Spinner as='tr' />}
        {!tableProps.loading && (
          <TRow>
            <TData colSpan={tableProps.getHeaderGroups()?.[0]?.headers?.length ?? 0}>
              <Icon icon={faDatabase} />
              <Typography>No data</Typography>
            </TData>
          </TRow>
        )}
      </BaseTBody>
    );
  }

  return (
    <BaseTBody $cssProps={cssProps} $tableProps={tableProps} {...componentProps}>
      {tableProps.loading && <Spinner as='tr' />}
      {tableProps.getRowModel().rows.map((row) => (
        <TRow aria-selected={row.getIsSelected()} data-row-type={'body-row'} data-row-id={row.id} key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TData data-cell-id={cell.id} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TData>
          ))}
        </TRow>
      ))}
    </BaseTBody>
  );
};

export { TBody };
