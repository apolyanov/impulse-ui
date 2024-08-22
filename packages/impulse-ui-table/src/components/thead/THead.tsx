import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { Typography } from '@impulse-ui/text';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { theadComponentMap } from '../../maps';
import { thead } from '../../styles';
import { SortingButton } from '../sorting-button';
import { THeader } from '../theader';
import { TRow } from '../trow';

import { THeadComponentProps } from '../../types';
import { BaseTHead } from './BaseTHead.styles';

const THead = <T extends object>({ iStyle, ...rest }: THeadComponentProps<T>) => {
  const tableState = useImpulseTable();
  const { getHeaderGroups, loading } = tableState;

  const { theadStyle, theaderStyle, trowStyle, theaderTypographyStyle, theaderSortButtonStyle } = useComponentStyle(
    theadComponentMap,
    tableState,
    thead<T>(),
    iStyle,
  );

  const isFirstOrLastColumnHeader = (index: number, arrLength: number) => {
    if (index === 0) {
      return '-first';
    }

    if (index === arrLength - 1) {
      return '-last';
    }

    return '';
  };

  return (
    <BaseTHead $iStyle={theadStyle} $cssProps={extractCssProps(rest)} {...rest}>
      {getHeaderGroups().map((headerGroup) => (
        <TRow iStyle={trowStyle} key={headerGroup.id}>
          {headerGroup.headers.map((header, index, array) => (
            <THeader style={{ width: header.column.getSize() }} iStyle={theaderStyle} key={header.id}>
              <Typography
                iStyle={theaderTypographyStyle}
                data-table-element={`column-header${isFirstOrLastColumnHeader(index, array.length)}`}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                <SortingButton disabled={loading} iStyle={theaderSortButtonStyle} columnId={header.column.id} />
              </Typography>
            </THeader>
          ))}
        </TRow>
      ))}
    </BaseTHead>
  );
};

export { THead };
