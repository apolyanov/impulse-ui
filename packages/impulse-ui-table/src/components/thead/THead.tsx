'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { useHover } from '@impulse-ui/core';
import { Typography } from '@impulse-ui/text';
import { THeadComponentProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { theadComponentMap } from '../../maps';
import { thead, theadProps } from '../../styles';
import { SortingButton } from '../sorting-button';
import { THeader } from '../theader';
import { TRow } from '../trow';

import { BaseTHead } from './BaseTHead.styles';

const THead: FunctionComponent<THeadComponentProps> = ({ iStyle, iProps, ...rest }) => {
  const { getHeaderGroups } = useImpulseTable();

  const {
    theadStyle,
    theaderStyle,
    trowStyle,
    theaderTypographyStyle,
    theaderSortButtonStyle,
    theadStyleProps,
    theaderStyleProps,
    trowStyleProps,
    theaderTypographyStyleProps,
    theaderSortButtonStyleProps,
  } = useComponentStyle(theadComponentMap, rest, thead, theadProps, iStyle, iProps);

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
    <BaseTHead $iStyle={theadStyle} $iProps={theadStyleProps} {...rest}>
      {getHeaderGroups().map((headerGroup) => (
        <TRow iStyle={trowStyle} iProps={trowStyleProps} key={headerGroup.id}>
          {headerGroup.headers.map((header, index, array) => (
            <THeader iStyle={theaderStyle} iProps={theaderStyleProps} key={header.id}>
              <Typography
                data-table-element={`column-header${isFirstOrLastColumnHeader(index, array.length)}`}
                iStyle={theaderTypographyStyle}
                iProps={theaderTypographyStyleProps}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                <SortingButton
                  iStyle={theaderSortButtonStyle}
                  iProps={theaderSortButtonStyleProps}
                  columnId={header.column.id}
                />
              </Typography>
            </THeader>
          ))}
        </TRow>
      ))}
    </BaseTHead>
  );
};

export { THead };
