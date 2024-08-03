import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { flexRender } from '@tanstack/react-table';
import { FunctionComponent } from 'react';

import { useImpulseTable } from '../../hooks';
import { tbodyComponentMap } from '../../maps';
import { tbody } from '../../styles';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTBody } from './BaseTBody.styles';
import { TBodyComponentProps } from '../../types';

const TBody = <T extends object>({ iStyle, ...rest }: TBodyComponentProps<T>) => {
  const tableState = useImpulseTable();
  const {
    tbodyStyle,
    trowStyle,
    tdataStyle,
    noContentTdataStyle,
    noContentIconStyle,
    noContentTrowStyle,
    noContentTypographyStyle,
    noContentTbodyStyle,
    loaderSpinnerStyle,
  } = useComponentStyle(tbodyComponentMap, tableState, tbody, iStyle);

  if (tableState.showNoData()) {
    return (
      <BaseTBody $iStyle={noContentTbodyStyle} $cssProps={extractCssProps(rest)} {...rest}>
        {tableState.loading && <Spinner as='tr' iStyle={loaderSpinnerStyle} />}
        {!tableState.loading && (
          <TRow iStyle={noContentTrowStyle}>
            <TData colSpan={tableState.getHeaderGroups()?.[0]?.headers?.length ?? 0} iStyle={noContentTdataStyle}>
              <Icon iStyle={noContentIconStyle} icon={faDatabase} />
              <Typography iStyle={noContentTypographyStyle}>No data</Typography>
            </TData>
          </TRow>
        )}
      </BaseTBody>
    );
  }

  return (
    <BaseTBody $iStyle={tbodyStyle} $cssProps={extractCssProps(rest)} {...rest}>
      {tableState.loading && <Spinner as='tr' iStyle={loaderSpinnerStyle} />}
      {tableState.getRowModel().rows.map((row) => (
        <TRow
          aria-selected={row.getIsSelected()}
          data-row-type={'body-row'}
          data-row-id={row.id}
          iStyle={trowStyle}
          key={row.id}
        >
          {row.getVisibleCells().map((cell) => (
            <TData data-cell-id={cell.id} iStyle={tdataStyle} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TData>
          ))}
        </TRow>
      ))}
    </BaseTBody>
  );
};

export { TBody };
