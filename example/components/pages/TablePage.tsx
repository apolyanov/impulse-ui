import React from 'react';
import { faker } from '@faker-js/faker';
import { Container } from '@impulse-ui/layout';
import { ImpulseTable } from '@impulse-ui/table';
import { createColumnHelper } from '@tanstack/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const generateFakeData = (count: number) => {
  const fakeData = [];

  for (let i = 0; i < count; i++) {
    const schema = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 99 }),
      visits: faker.number.int({ min: 1, max: 50 }),
      status: faker.helpers.arrayElement(['Single', 'Complicated', 'Married', 'Divorced']),
      progress: faker.number.int({ min: 0, max: 100 }),
    };

    fakeData.push(schema);
  }

  return fakeData as Person[];
};

const numberOfInstances = 10_000;
const data = generateFakeData(numberOfInstances);

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: 'First Name',
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Last Name',
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: (info) => info.renderValue(),
    // footer: (info) => info.column.id,
    size: 40,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    // footer: (info) => info.column.id,
    size: 40,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    // footer: (info) => info.column.id,
    enableSorting: true,
    sortingFn: 'auto',
    size: 40,
  }),
];

const TablePage = () => {
  return (
    <Container>
      <ImpulseTable initialState={{ pagination: { pageIndex: 0, pageSize: 20 } }} data={data} columns={columns} />
    </Container>
  );
};

export default TablePage;
