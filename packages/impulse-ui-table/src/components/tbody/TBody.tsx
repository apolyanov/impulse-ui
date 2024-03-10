'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { TBodyComponentProps } from '@impulse-ui/types/src';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { tbodyComponentMap } from '../../maps/tbody.map';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTBody } from './BaseTBody.styles';

const TBody: FunctionComponent<TBodyComponentProps> = ({ iStyle, iProps, ...rest }) => {
  const { getRowModel } = useImpulseTable();

  const { tbodyStyle, trowStyle, tdataStyle, tbodyStyleProps, trowStyleProps, tdataStyleProps } = useComponentStyle(
    tbodyComponentMap,
    rest,
    undefined,
    undefined,
    iStyle,
    iProps,
  );

  return (
    <BaseTBody $iStyle={tbodyStyle} $iProps={tbodyStyleProps} {...rest}>
      {getRowModel().rows.map((row) => (
        <TRow iStyle={trowStyle} iProps={trowStyleProps} key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TData iStyle={tdataStyle} iProps={tdataStyleProps} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TData>
          ))}
        </TRow>
      ))}
    </BaseTBody>
  );
};

export { TBody };
