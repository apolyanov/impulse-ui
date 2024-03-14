import { PropsWithChildren } from 'react';

import { ImpulseTableProps } from './impulseTable.types';

interface ImpulseTableProviderProps<T = any> extends ImpulseTableProps<T>, PropsWithChildren {}

export type { ImpulseTableProviderProps };
