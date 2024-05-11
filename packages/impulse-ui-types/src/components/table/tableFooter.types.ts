import { Table } from '@tanstack/react-table';

import { ContainerHTMLProps } from '../layout';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';

import { ImpulseTableProviderUtils } from './impulseTableProvider.types';
import { PaginationStyle } from './pagination.types';

interface TableFooterProps<T = object> {
  iStyle?: Partial<TableFooterStyle<T>>;
}

interface TableFooterStyle<T = {}> {
  containerStyle: IOStyle<ContainerHTMLProps & T>;
  selectedRowsStyle: IOStyle<TypographyHTMLProps & T>;
  paginationStyle: Partial<PaginationStyle<T>>;
}

export type { TableFooterProps, TableFooterStyle };
