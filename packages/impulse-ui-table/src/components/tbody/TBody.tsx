'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { TBodyComponentProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { tbodyComponentMap } from '../../maps';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTBody } from './BaseTBody.styles';

const TBody: FunctionComponent<TBodyComponentProps> = ({ iStyle, ...rest }) => {
  const { getRowModel } = useImpulseTable();
  const { tbodyStyle, trowStyle, tdataStyle } = useComponentStyle(tbodyComponentMap, rest, undefined, iStyle);

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
};

export { TBody };
