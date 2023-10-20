import React, { FunctionComponent, useState } from 'react';
import { ImpulseTableProviderProps } from '@impulse-ui/types';
import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

import { createTableContext } from '../../contexts';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: 'First Name',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Last Name',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
];

const ImpulseTableContext = createTableContext<Person>();

const ImpulseTableProvider: FunctionComponent<ImpulseTableProviderProps> = ({ children }) => {
  const [data, setData] = useState<Person[]>([...defaultData]);

  const tableState = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <ImpulseTableContext.Provider value={tableState} children={children} />;
};

export { ImpulseTableContext, ImpulseTableProvider };
