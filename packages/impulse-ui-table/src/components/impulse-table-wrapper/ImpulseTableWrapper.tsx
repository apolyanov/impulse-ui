import { TableHeader } from '../table-header';
import { Table } from '../table';
import { THead } from '../thead';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { TableFooter } from '../table-footer';
import { Container } from '@impulse-ui/layout';
import { useComponentStyle } from '@impulse-ui/core';
import { impulseTableComponentMap } from '../../maps';
import { impulseTableStyles } from '../../styles';
import { ImpulseTableProps } from '../../types';
import { useImpulseTable } from '../../hooks';

const ImpulseTableWrapper = <T extends object>({ iStyle, ...tableProps }: ImpulseTableProps<T>) => {
  const tableState = useImpulseTable();

  const { tableHeaderProps } = tableProps;

  const { tableContainerStyle, tableStyle } = useComponentStyle(
    impulseTableComponentMap,
    tableState,
    impulseTableStyles<T>(),
    iStyle,
  );

  return (
    <Container iStyle={tableContainerStyle}>
      <TableHeader iStyle={iStyle?.tableHeaderStyle} {...tableHeaderProps} />
      <Table iStyle={tableStyle}>
        <THead iStyle={iStyle?.theadStyle} />
        <TBody iStyle={iStyle?.tbodyStyle} />
        <TFoot iStyle={iStyle?.tfootStyle} />
      </Table>
      <TableFooter iStyle={iStyle?.tableFooterStyle} />
    </Container>
  );
};

export { ImpulseTableWrapper };
