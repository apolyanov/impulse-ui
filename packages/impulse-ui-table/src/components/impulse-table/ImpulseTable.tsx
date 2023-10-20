import React from 'react';
import { Container } from '@impulse-ui/layout';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { Table } from '../table';
import { TableHeader } from '../table-header';
import { TBody } from '../tbody';
import { TData } from '../tdata';
import { TFoot } from '../tfoot';
import { THead } from '../thead';
import { THeader } from '../theader';
import { TRow } from '../trow';

const ImpulseTable = () => {
  const { getHeaderGroups, getRowModel, getFooterGroups } = useImpulseTable();

  return (
    <Container iProps={{ hasDropShadow: true, hasBorderRadius: true }}>
      <TableHeader />
      <Table>
        <THead>
          {getHeaderGroups().map((headerGroup) => (
            <TRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <THeader onClick={header.column.getToggleSortingHandler()} key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </THeader>
              ))}
            </TRow>
          ))}
        </THead>
        <TBody>
          {getRowModel().rows.map((row) => (
            <TRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TData key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TData>
              ))}
            </TRow>
          ))}
        </TBody>
        <TFoot>
          {getFooterGroups().map((footerGroup) => (
            <TRow key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <TData key={footer.id}>{flexRender(footer.column.columnDef.footer, footer.getContext())}</TData>
              ))}
            </TRow>
          ))}
        </TFoot>
      </Table>
    </Container>
  );
};

export { ImpulseTable };
