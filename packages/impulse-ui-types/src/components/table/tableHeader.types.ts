import { IconButtonStyle } from '../buttons';
import { TextInputStyle } from '../input';
import { IOStyle } from '../theme';

interface TableHeaderProps extends TableHeaderRestProps {
  iStyle?: Partial<TableHeaderStyle>;
}

interface TableHeaderRestProps {
  tableName?: string;
  showTableControls?: boolean;
  showTableSearch?: boolean;
}

interface TableHeaderStyle {
  containerStyle: IOStyle;
  tableNameStyle: IOStyle;
  searchInputStyle: Partial<TextInputStyle>;
  filtersButtonStyle: Partial<IconButtonStyle>;
  settingsButtonStyle: Partial<IconButtonStyle>;
}

export type { TableHeaderProps, TableHeaderRestProps, TableHeaderStyle };
