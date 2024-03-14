import { IOStyle } from '../theme';

import { PaginationStyle } from './pagination.types';

interface TableFooterProps {
  iStyle?: Partial<TableFooterStyle>;
}

interface TableFooterStyle {
  containerStyle: IOStyle;
  selectedRowsStyle: IOStyle;
  paginationStyle: Partial<PaginationStyle>;
}

export type { TableFooterProps, TableFooterStyle };
