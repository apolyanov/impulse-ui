'use client';
import React, { FunctionComponent } from 'react';
import { ImpulseTableProviderProps } from '@impulse-ui/types';
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

import { createTableContext } from '../../contexts';

const ImpulseTableContext = createTableContext<unknown>();

const ImpulseTableProvider: FunctionComponent<ImpulseTableProviderProps> = ({ children, data, columns }) => {
  const tableState = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <ImpulseTableContext.Provider value={{ state: tableState }} children={children} />;
};

export { ImpulseTableContext, ImpulseTableProvider };
