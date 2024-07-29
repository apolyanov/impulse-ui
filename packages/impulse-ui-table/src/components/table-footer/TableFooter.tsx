import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { TableFooterProps } from '@impulse-ui/types';
import { FunctionComponent } from 'react';

import { useImpulseTable } from '../../hooks';
import { tableFooterComponentMap } from '../../maps';
import { tableFooterStyles } from '../../styles';
import { Pagination } from '../pagination';

const TableFooter: FunctionComponent<TableFooterProps> = ({ iStyle, ...rest }) => {
  const { getState, showNoData } = useImpulseTable();

  const { containerStyle, selectedRowsStyle, paginationStyle } = useComponentStyle(
    tableFooterComponentMap,
    rest,
    tableFooterStyles,
    iStyle,
  );

  const getSelectedRowsCount = () => Object.keys(getState().rowSelection).length;

  return (
    <Container iStyle={containerStyle}>
      {getSelectedRowsCount() > 0 && (
        <Typography iStyle={selectedRowsStyle}>{`Selected rows ${getSelectedRowsCount()}`}</Typography>
      )}
      {getState().pagination && !showNoData() && <Pagination iStyle={paginationStyle} />}
    </Container>
  );
};

export { TableFooter };
