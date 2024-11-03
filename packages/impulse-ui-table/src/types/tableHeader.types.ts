import { TableIComponent } from './impulseTable.types.ts';

interface TableHeaderProps extends TableHeaderRestProps, TableIComponent<TableHeaderRestProps> {}

interface TableHeaderRestProps {
  tableName?: string;
  showTableControls?: boolean;
  showTableSearch?: boolean;
}

export type { TableHeaderProps, TableHeaderRestProps };
