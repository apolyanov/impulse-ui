'use client';
import React, { FunctionComponent, useMemo } from 'react';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
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
  const { getRowModel, showNoData, getHeaderGroups } = useImpulseTable();
  const {
    tbodyStyle,
    trowStyle,
    tdataStyle,
    noContentTdataStyle,
    noContentIconStyle,
    noContentTrowStyle,
    noContentTypographyStyle,
    noContentTbodyStyle,
  } = useComponentStyle(tbodyComponentMap, rest, tbody, iStyle);

  return useMemo(() => {
    if (showNoData()) {
      return (
        <BaseTBody $iStyle={noContentTbodyStyle} {...rest}>
          <TRow iStyle={noContentTrowStyle}>
            <TData colSpan={getHeaderGroups()[0].headers.length} iStyle={noContentTdataStyle}>
              <Icon iStyle={noContentIconStyle} icon={faDatabase} />
              <Typography iStyle={noContentTypographyStyle}>No data</Typography>
            </TData>
          </TRow>
        </BaseTBody>
      );
    }

    return (
      <BaseTBody $iStyle={tbodyStyle} {...rest}>
        {getRowModel().rows.map((row) => (
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
    getHeaderGroups,
    getRowModel,
    noContentIconStyle,
    noContentTbodyStyle,
    noContentTdataStyle,
    noContentTrowStyle,
    noContentTypographyStyle,
    rest,
    showNoData,
    tbodyStyle,
    tdataStyle,
    trowStyle,
  ]);
};

export { TBody };
