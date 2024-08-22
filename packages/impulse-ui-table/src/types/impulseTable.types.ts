import { TableOptions } from '@tanstack/react-table';

import { IOStyle } from '@impulse-ui/core';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TableFooterStyle } from './tableFooter.types';
import { TableHeaderRestProps, TableHeaderStyle } from './tableHeader.types';
import { TBodyStyle } from './tbody.types';
import { TFootStyle } from './tfoot.types';
import { THeadStyle } from './thead.types';

interface ImpulseTableProps<T> extends ImpulseTableRestProps<T> {
  iStyle?: Partial<ImpulseTableStyle<ImpulseTableState<T>>>;
}

interface ImpulseTableRestProps<T> extends Partial<TableOptions<T>> {
  data: TableOptions<T>['data'];
  columns: TableOptions<T>['columns'];
  tableHeaderProps?: Partial<TableHeaderRestProps>;
  loading?: boolean;
}

interface ImpulseTableStyle<T> {
  tableContainerStyle: IOStyle<ImpulseTableState<T>>;
  tableHeaderStyle: Partial<TableHeaderStyle<T>>;
  tableStyle: IOStyle<ImpulseTableState<T>>;
  theadStyle: Partial<THeadStyle<ImpulseTableState<T>>>;
  tbodyStyle: Partial<TBodyStyle<ImpulseTableState<T>>>;
  tfootStyle: Partial<TFootStyle<ImpulseTableState<T>>>;
  tableFooterStyle: Partial<TableFooterStyle<T>>;
}

export type { ImpulseTableProps, ImpulseTableRestProps, ImpulseTableStyle };
