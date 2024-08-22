import { IOStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { TypographyHTMLProps } from '@impulse-ui/text';
import { ImpulseTableState } from './impulseTableProvider.types.ts';
import { PaginationStyle } from './pagination.types';

interface TableFooterProps<T extends object> {
  iStyle?: Partial<TableFooterStyle<ImpulseTableState<T>>>;
}

interface TableFooterStyle<T> {
  containerStyle: IOStyle<ContainerHTMLProps & T>;
  selectedRowsStyle: IOStyle<TypographyHTMLProps & T>;
  paginationStyle: Partial<PaginationStyle<T>>;
}

export type { TableFooterProps, TableFooterStyle };
