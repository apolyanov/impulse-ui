import { TableOptions } from '@tanstack/react-table';

import { IOStyle } from '../theme';

import { TableFooterStyle } from './tableFooter.types';
import { TableHeaderStyle } from './tableHeader.types';
import { TBodyStyle } from './tbody.types';
import { TFootStyle } from './tfoot.types';
import { THeadStyle } from './thead.types';

interface ImpulseTableProps<T = any> extends Partial<TableOptions<T>> {
  iStyle?: Partial<ImpulseTableStyle>;
  data: TableOptions<T>['data'];
  columns: TableOptions<T>['columns'];
}

interface ImpulseTableStyle {
  tableContainerStyle: IOStyle;
  tableHeaderStyle: Partial<TableHeaderStyle>;
  tableStyle: IOStyle;
  theadStyle: Partial<THeadStyle>;
  tbodyStyle: Partial<TBodyStyle>;
  tfootStyle: Partial<TFootStyle>;
  tableFooterStyle: Partial<TableFooterStyle>;
}

export type { ImpulseTableProps, ImpulseTableStyle };
