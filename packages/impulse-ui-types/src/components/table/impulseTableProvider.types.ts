import { ReactNode } from 'react';

import { ImpulseTableProps } from './impulseTable.types';

interface ImpulseTableProviderProps<T = unknown> extends ImpulseTableProps<T> {
  children: ReactNode;
}

export type { ImpulseTableProviderProps };
