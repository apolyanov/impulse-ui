import { IconButtonStyle } from '../buttons';
import { TextInputStyle } from '../input';
import { IOStyle } from '../theme';

interface TableHeaderProps {
  iStyle?: Partial<TableHeaderStyle>;
}

interface TableHeaderStyle {
  containerStyle: IOStyle;
  tableNameStyle: IOStyle;
  searchInputStyle: Partial<TextInputStyle>;
  filtersButtonStyle: Partial<IconButtonStyle>;
  settingsButtonStyle: Partial<IconButtonStyle>;
}

export type { TableHeaderProps, TableHeaderStyle };
