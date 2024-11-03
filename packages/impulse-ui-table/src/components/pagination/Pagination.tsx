import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { ChangeEvent } from 'react';

import { useImpulseTable } from '../../hooks';
import { PaginationProps } from '../../types';

const Pagination = <T extends object>({}: PaginationProps<T>) => {
  const tableState = useImpulseTable();

  const { getPageCount, getState, setPageIndex, nextPage, getCanNextPage, previousPage, getCanPreviousPage, loading } =
    tableState;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPageIndex(Number(event.target.value) - 1);
  };

  const handleClickLastPage = () => setPageIndex(getPageCount() - 1);
  const handleClickFirstPage = () => setPageIndex(0);

  return (
    <Container>
      <Typography>{`Page ${getState().pagination.pageIndex + 1} of ${getPageCount()}`}</Typography>
      <IconButton disabled={!getCanPreviousPage() || loading} onClick={handleClickFirstPage} icon={faAnglesLeft} />
      <IconButton disabled={!getCanPreviousPage() || loading} onClick={previousPage} icon={faAngleLeft} />
      <TextInput
        disabled={loading}
        onChange={handleInputChange}
        min={0}
        max={getPageCount()}
        value={getState().pagination.pageIndex + 1}
        type={'number'}
      />
      <IconButton disabled={!getCanNextPage() || loading} onClick={nextPage} icon={faAngleRight} />
      <IconButton disabled={!getCanNextPage() || loading} onClick={handleClickLastPage} icon={faAnglesRight} />
    </Container>
  );
};

export { Pagination };
