import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { ChangeEvent } from 'react';

import { useImpulseTable } from '../../hooks';
import { paginationComponentMap } from '../../maps';
import { paginationStyles } from '../../styles';
import { PaginationProps } from '../../types';

const Pagination = <T extends object>({ iStyle }: PaginationProps<T>) => {
  const tableState = useImpulseTable();

  const { getPageCount, getState, setPageIndex, nextPage, getCanNextPage, previousPage, getCanPreviousPage, loading } =
    tableState;

  const { containerStyle, pageCounterStyle, pageInputStyle, pageChangeButtonStyle } = useComponentStyle(
    paginationComponentMap,
    tableState,
    paginationStyles<T>(),
    iStyle,
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPageIndex(Number(event.target.value) - 1);
  };

  const handleClickLastPage = () => setPageIndex(getPageCount() - 1);
  const handleClickFirstPage = () => setPageIndex(0);

  return (
    <Container iStyle={containerStyle}>
      <Typography iStyle={pageCounterStyle}>{`Page ${
        getState().pagination.pageIndex + 1
      } of ${getPageCount()}`}</Typography>
      <IconButton
        disabled={!getCanPreviousPage() || loading}
        onClick={handleClickFirstPage}
        iStyle={pageChangeButtonStyle}
        icon={faAnglesLeft}
      />
      <IconButton
        disabled={!getCanPreviousPage() || loading}
        onClick={previousPage}
        iStyle={pageChangeButtonStyle}
        icon={faAngleLeft}
      />
      <TextInput
        disabled={loading}
        onChange={handleInputChange}
        min={0}
        max={getPageCount()}
        value={getState().pagination.pageIndex + 1}
        type={'number'}
        iStyle={pageInputStyle}
      />
      <IconButton
        disabled={!getCanNextPage() || loading}
        onClick={nextPage}
        iStyle={pageChangeButtonStyle}
        icon={faAngleRight}
      />
      <IconButton
        disabled={!getCanNextPage() || loading}
        onClick={handleClickLastPage}
        iStyle={pageChangeButtonStyle}
        icon={faAnglesRight}
      />
    </Container>
  );
};

export { Pagination };
