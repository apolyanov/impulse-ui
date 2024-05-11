'use client';
import React, { FunctionComponent, PropsWithChildren, useState } from 'react';
import { ImpulseTableProviderProps } from '@impulse-ui/types';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowSelectionState,
  Updater,
  useReactTable,
} from '@tanstack/react-table';

import { createTableContext } from '../../contexts';

const ImpulseTableContext = createTableContext();
const createInitialPaginationState = (pagination?: Partial<PaginationState>) => {
  if (pagination) {
    return {
      pageSize: pagination.pageSize ?? 20,
      pageIndex: pagination.pageIndex ?? 0,
    };
  }
};

const ImpulseTableProvider = ({ children, ...props }: PropsWithChildren<ImpulseTableProviderProps<any>>) => {
  const { initialState, loading } = props;

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [innerPagination, setInnerPagination] = useState<PaginationState | undefined>(
    createInitialPaginationState(initialState?.pagination),
  );

  const handleOnPaginationState = (updater: Updater<PaginationState>) => {
    if (typeof updater === 'function' && innerPagination) {
      setInnerPagination(updater(innerPagination));
    } else {
      setInnerPagination(innerPagination);
    }
  };

  const showNoData = () => tableState.getRowModel().rows.length === 0;

  const tableState = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: innerPagination ? getPaginationRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: initialState?.pagination,
    },
    state: {
      pagination: innerPagination,
      rowSelection: rowSelection,
    },
    onPaginationChange: innerPagination ? handleOnPaginationState : undefined,
    onRowSelectionChange: setRowSelection,
    ...props,
  });

  return <ImpulseTableContext.Provider value={{ state: { ...tableState, showNoData, loading } }} children={children} />;
};

export { ImpulseTableContext, ImpulseTableProvider };
