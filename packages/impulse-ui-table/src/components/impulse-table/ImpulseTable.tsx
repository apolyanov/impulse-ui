import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { ImpulseTableProps } from '@impulse-ui/types';
import { PropsWithChildren } from 'react';

import { impulseTableComponentMap } from '../../maps';
import { impulseTableStyles } from '../../styles';
import { ImpulseTableProvider } from '../impulse-table-provider';
import { Table } from '../table';
import { TableFooter } from '../table-footer';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { THead } from '../thead';

const ImpulseTable = <T extends {} = any>({ iStyle, ...tableProps }: PropsWithChildren<ImpulseTableProps<any>>) => {
  const { tableHeaderProps, ...tableProviderProps } = tableProps;

  const { tableContainerStyle, tableStyle } = useComponentStyle(
    impulseTableComponentMap,
    tableProviderProps,
    impulseTableStyles,
    iStyle,
  );

  return (
    <ImpulseTableProvider {...tableProviderProps}>
      <Container iStyle={tableContainerStyle}>
        <TableHeader iStyle={iStyle?.tableHeaderStyle} {...tableHeaderProps} />
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
