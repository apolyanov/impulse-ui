import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';

import { useImpulseTable } from '../../hooks';
import { TableFooterProps } from '../../types';
import { Pagination } from '../pagination';

const TableFooter = ({}: TableFooterProps) => {
  const tableState = useImpulseTable();

  const { getState, showNoData } = tableState;

  const getSelectedRowsCount = () => Object.keys(getState().rowSelection).length;

  return (
    <Container>
      {getSelectedRowsCount() > 0 && <Typography>{`Selected rows ${getSelectedRowsCount()}`}</Typography>}
      {getState().pagination && !showNoData() && <Pagination />}
    </Container>
  );
};

export { TableFooter };
