import { PropsWithChildren } from 'react';
import { Table } from '@tanstack/react-table';

import { ImpulseTableProps } from './impulseTable.types';

interface ImpulseTableProviderProps<T extends {}> extends ImpulseTableProps<T>, PropsWithChildren {}

interface ImpulseTableProviderUtils {
  showNoData: () => boolean;
  loading?: boolean;
}

type ImpulseTableState<T> = Table<T> & ImpulseTableProviderUtils;

export type { ImpulseTableProviderProps, ImpulseTableProviderUtils, ImpulseTableState };
