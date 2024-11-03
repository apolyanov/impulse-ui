import { TableOptions } from '@tanstack/react-table';

import { BaseIComponent, IColorTheme, IComponent, IOCss } from '@impulse-ui/core';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TableHeaderRestProps } from './tableHeader.types';

interface TableIComponent<Props extends object = object> {
  iCss?: IOCss<Props & { tableProps: ImpulseTableState<any> }>;
  iTheme?: IColorTheme;
}

type TableBaseIComponent<HTMLElement extends object> = BaseIComponent<HTMLElement> & {
  $tableProps?: ImpulseTableState<any>;
};

interface ImpulseTableProps<T> extends ImpulseTableRestProps<T>, IComponent<ImpulseTableState<T>> {}

interface ImpulseTableRestProps<T> extends Partial<TableOptions<T>> {
  data: TableOptions<T>['data'];
  columns: TableOptions<T>['columns'];
  tableHeaderProps?: Partial<TableHeaderRestProps>;
  loading?: boolean;
}

export type { ImpulseTableProps, ImpulseTableRestProps, TableBaseIComponent, TableIComponent };
