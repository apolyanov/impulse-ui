import React, { ChangeEvent, FunctionComponent } from 'react';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { PaginationProps } from '@impulse-ui/types';

import { useImpulseTable } from '../../hooks';
import { paginationComponentMap } from '../../maps';
import { paginationStyles } from '../../styles';

const Pagination: FunctionComponent<PaginationProps> = ({ iStyle, ...rest }) => {
  const { getPageCount, getState, setPageIndex, nextPage, getCanNextPage, previousPage, getCanPreviousPage } =
    useImpulseTable();

  const { containerStyle, pageCounterStyle, pageInputStyle, pageChangeButtonStyle } = useComponentStyle(
    paginationComponentMap,
    rest,
    paginationStyles,
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
        disabled={!getCanPreviousPage()}
        onClick={handleClickFirstPage}
        iStyle={pageChangeButtonStyle}
        icon={faAnglesLeft}
      />
      <IconButton
        disabled={!getCanPreviousPage()}
        onClick={previousPage}
        iStyle={pageChangeButtonStyle}
        icon={faAngleLeft}
      />
      <TextInput
        onChange={handleInputChange}
        min={0}
        max={getPageCount()}
        value={getState().pagination.pageIndex + 1}
        type={'number'}
        iStyle={pageInputStyle}
      />
      <IconButton disabled={!getCanNextPage()} onClick={nextPage} iStyle={pageChangeButtonStyle} icon={faAngleRight} />
      <IconButton
        disabled={!getCanNextPage()}
        onClick={handleClickLastPage}
        iStyle={pageChangeButtonStyle}
        icon={faAnglesRight}
      />
    </Container>
  );
};

export { Pagination };
