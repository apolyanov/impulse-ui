import { createContext } from 'react';
import { Table } from '@tanstack/react-table';

const createTableContext = <T = unknown>() => createContext<{ state: Table<T> } | undefined>(undefined);

export { createTableContext };
