'use client';
import React, { FunctionComponent } from 'react';
import { Container } from '@impulse-ui/layout';
import { ImpulseTableProps } from '@impulse-ui/types';

import { impulseTableContainerProps, impulseTableContainerStyle } from '../../styles/impulseTable.styles';
import { ImpulseTableProvider } from '../impulse-table-provider';
import { Table } from '../table';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { THead } from '../thead';

const ImpulseTable: FunctionComponent<ImpulseTableProps> = ({ data, columns }) => {
  return (
    <ImpulseTableProvider data={data} columns={columns}>
      <Container iStyle={impulseTableContainerStyle} iProps={impulseTableContainerProps}>
        <TableHeader />
        <Table>
          <THead />
          <TBody />
          <TFoot />
        </Table>
      </Container>
    </ImpulseTableProvider>
  );
};

export { ImpulseTable };
