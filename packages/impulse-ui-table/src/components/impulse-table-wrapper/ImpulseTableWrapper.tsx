import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { useImpulseTable } from '../../hooks';
import { impulseTableComponentMap } from '../../maps';
import { impulseTableStyles } from '../../styles';
import { ImpulseTableProps } from '../../types';
import { Table } from '../table';
import { TableFooter } from '../table-footer';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { THead } from '../thead';

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
    <Container {...tableContainerStyle}>
      <TableHeader iStyle={iStyle?.tableHeaderStyle} {...tableHeaderProps} />
      <Table {...tableStyle}>
        <THead iStyle={iStyle?.theadStyle} />
        <TBody iStyle={iStyle?.tbodyStyle} />
        <TFoot iStyle={iStyle?.tfootStyle} />
      </Table>
      <TableFooter iStyle={iStyle?.tableFooterStyle} />
    </Container>
  );
};

export { ImpulseTableWrapper };
