import React, { FunctionComponent } from 'react';
import { THeadProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { THeader } from '../theader';
import { TRow } from '../trow';

import { BaseTHead } from './BaseTHead.styles';

const THead: FunctionComponent<THeadProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  const { getHeaderGroups } = useImpulseTable();

  return (
    <BaseTHead $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest}>
      {getHeaderGroups().map((headerGroup) => (
        <TRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <THeader onClick={header.column.getToggleSortingHandler()} key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </THeader>
          ))}
        </TRow>
      ))}
    </BaseTHead>
  );
};

export { THead };
