import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';

import { useImpulseTable } from '../../hooks';
import { tableFooterComponentMap } from '../../maps';
import { tableFooterStyles } from '../../styles';
import { TableFooterProps } from '../../types';
import { Pagination } from '../pagination';

const TableFooter = <T extends object>({ iStyle }: TableFooterProps<T>) => {
  const tableState = useImpulseTable();

  const { getState, showNoData } = tableState;

  const { containerStyle, selectedRowsStyle, paginationStyle } = useComponentStyle(
    tableFooterComponentMap,
    tableState,
    tableFooterStyles<T>(),
    iStyle,
  );

  const getSelectedRowsCount = () => Object.keys(getState().rowSelection).length;

  return (
    <Container {...containerStyle}>
      {getSelectedRowsCount() > 0 && (
        <Typography {...selectedRowsStyle}>{`Selected rows ${getSelectedRowsCount()}`}</Typography>
      )}
      {getState().pagination && !showNoData() && <Pagination iStyle={paginationStyle} />}
    </Container>
  );
};

export { TableFooter };
