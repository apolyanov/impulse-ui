import { extractCssProps } from '@impulse-ui/core';
import { Typography } from '@impulse-ui/text';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { SortingButton } from '../sorting-button';
import { THeader } from '../theader';
import { TRow } from '../trow';

import { THeadComponentProps } from '../../types';
import { BaseTHead } from './BaseTHead.styles.tsx';

const THead = ({ iCss, iTheme, ...rest }: THeadComponentProps) => {
  const tableProps = useImpulseTable();
  const { getHeaderGroups, loading } = tableProps;
  const { cssProps, componentProps } = extractCssProps(rest);

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
    <BaseTHead $cssProps={cssProps} $tableProps={tableProps} {...componentProps}>
      {getHeaderGroups().map((headerGroup) => (
        <TRow key={headerGroup.id}>
          {headerGroup.headers.map((header, index, array) => (
            <THeader style={{ width: header.column.getSize() }} key={header.id}>
              <Typography data-table-element={`column-header${isFirstOrLastColumnHeader(index, array.length)}`}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                <SortingButton disabled={loading} columnId={header.column.id} />
              </Typography>
            </THeader>
          ))}
        </TRow>
      ))}
    </BaseTHead>
  );
};

export { THead };
