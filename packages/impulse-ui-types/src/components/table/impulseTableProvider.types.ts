import { PropsWithChildren } from 'react';

import { ImpulseTableProps } from './impulseTable.types';

interface ImpulseTableProviderProps<T = any> extends ImpulseTableProps<T>, PropsWithChildren {}
interface ImpulseTableProviderUtils {
  showNoData: () => boolean;
}

export type { ImpulseTableProviderProps, ImpulseTableProviderUtils };
