import React, { FunctionComponent } from 'react';
import { TBodyProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTBody } from './BaseTBody.styles';

const TBody: FunctionComponent<TBodyProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  const { getRowModel } = useImpulseTable();

  return (
    <BaseTBody $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest}>
      {getRowModel().rows.map((row) => (
        <TRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TData key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TData>
          ))}
        </TRow>
      ))}
    </BaseTBody>
  );
};

export { TBody };
