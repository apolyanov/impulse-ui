import {
  PaginationState,
  RowSelectionState,
  Updater,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useState } from 'react';

import { ImpulseTableContext } from '../../contexts';
import { ImpulseTableProviderProps } from '../../types';

const createInitialPaginationState = (pagination?: Partial<PaginationState>) => {
  if (pagination) {
    return {
      pageSize: pagination.pageSize ?? 20,
      pageIndex: pagination.pageIndex ?? 0,
    };
  }
};

const ImpulseTableProvider = <T extends object>({
  children,
  ...props
}: PropsWithChildren<ImpulseTableProviderProps<T>>) => {
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
