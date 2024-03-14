'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { ImpulseTableProps } from '@impulse-ui/types';

import { impulseTableComponentMap } from '../../maps/impulseTable.map';
import { impulseTableStyles } from '../../styles';
import { ImpulseTableProvider } from '../impulse-table-provider';
import { Table } from '../table';
import { TableFooter } from '../table-footer';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { THead } from '../thead';

const ImpulseTable: FunctionComponent<ImpulseTableProps> = ({ iStyle, ...tableProps }) => {
  const { tableContainerStyle, tableStyle } = useComponentStyle(
    impulseTableComponentMap,
    {},
    impulseTableStyles,
    iStyle,
  );

  return (
    <ImpulseTableProvider {...tableProps}>
      <Container iStyle={tableContainerStyle}>
        <TableHeader iStyle={iStyle?.tableHeaderStyle} />
        <Table iStyle={tableStyle}>
          <THead iStyle={iStyle?.theadStyle} />
          <TBody iStyle={iStyle?.tbodyStyle} />
          <TFoot iStyle={iStyle?.tfootStyle} />
        </Table>
        <TableFooter iStyle={iStyle?.tableFooterStyle} />
      </Container>
    </ImpulseTableProvider>
  );
};

export { ImpulseTable };
