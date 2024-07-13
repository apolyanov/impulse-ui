import { ImpulseTableProviderUtils } from '@impulse-ui/types';
import { Table } from '@tanstack/react-table';
import { createContext } from 'react';

const createTableContext = <T = any>() =>
  createContext<{ state: Table<T> & ImpulseTableProviderUtils } | undefined>(undefined);

const ImpulseTableContext = createTableContext();

export { createTableContext, ImpulseTableContext };
