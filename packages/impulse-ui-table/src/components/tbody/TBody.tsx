'use client';
import React, { FunctionComponent, useMemo } from 'react';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { TBodyComponentProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { tbodyComponentMap } from '../../maps';
import { tbody } from '../../styles';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTBody } from './BaseTBody.styles';

const TBody: FunctionComponent<TBodyComponentProps> = ({ iStyle, ...rest }) => {
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
  } = useComponentStyle(tbodyComponentMap, { ...tableState, ...rest }, tbody, iStyle);

  return useMemo(() => {
    if (tableState.showNoData()) {
      return (
        <BaseTBody $iStyle={noContentTbodyStyle} {...rest}>
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
      <BaseTBody $iStyle={tbodyStyle} {...rest}>
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
  }, [
    tableState,
    tbodyStyle,
    rest,
    loaderSpinnerStyle,
    noContentTbodyStyle,
    noContentTrowStyle,
    noContentTdataStyle,
    noContentIconStyle,
    noContentTypographyStyle,
    trowStyle,
    tdataStyle,
  ]);
};

export { TBody };
