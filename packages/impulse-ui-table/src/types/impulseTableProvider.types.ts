import { Table } from '@tanstack/react-table';
import { PropsWithChildren } from 'react';

import { ImpulseTableProps } from './impulseTable.types';

interface ImpulseTableProviderProps<T> extends ImpulseTableProps<T>, PropsWithChildren {}

interface ImpulseTableProviderUtils {
  showNoData: () => boolean;
  loading?: boolean;
}

type ImpulseTableState<T> = Table<T> & ImpulseTableProviderUtils;

export type { ImpulseTableProviderProps, ImpulseTableProviderUtils, ImpulseTableState };
