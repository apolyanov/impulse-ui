'use client';
import { createContext } from 'react';
import { ImpulseTableProviderUtils } from '@impulse-ui/types';
import { Table } from '@tanstack/react-table';

const createTableContext = <T = any>() =>
  createContext<{ state: Table<T> & ImpulseTableProviderUtils } | undefined>(undefined);

export { createTableContext };
