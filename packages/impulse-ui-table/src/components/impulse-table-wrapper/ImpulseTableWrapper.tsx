import { Container } from '@impulse-ui/layout';
import { ImpulseTableProps } from '../../types';
import { Table } from '../table';
import { TableFooter } from '../table-footer';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TFoot } from '../tfoot';
import { THead } from '../thead';

const ImpulseTableWrapper = <T extends object>({ ...tableProps }: ImpulseTableProps<T>) => {
  const { tableHeaderProps } = tableProps;

  return (
    <Container>
      <TableHeader {...tableHeaderProps} />
      <Table>
        <THead />
        <TBody />
        <TFoot />
      </Table>
      <TableFooter />
    </Container>
  );
};

export { ImpulseTableWrapper };
