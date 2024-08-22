import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { TextInputStyle } from '@impulse-ui/input';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { TypographyHTMLProps } from '@impulse-ui/text';
import { ImpulseTableState } from './impulseTableProvider.types.ts';

interface TableHeaderProps<T> extends TableHeaderRestProps {
  iStyle?: Partial<TableHeaderStyle<ImpulseTableState<T>>>;
}

interface TableHeaderRestProps {
  tableName?: string;
  showTableControls?: boolean;
  showTableSearch?: boolean;
}

interface TableHeaderStyle<T> {
  containerStyle: IOStyle<ContainerHTMLProps & T>;
  tableNameStyle: IOStyle<TypographyHTMLProps & T>;
  searchInputStyle: Partial<TextInputStyle<T>>;
  filtersButtonStyle: Partial<IconButtonStyle<T>>;
  settingsButtonStyle: Partial<IconButtonStyle<T>>;
}

export type { TableHeaderProps, TableHeaderRestProps, TableHeaderStyle };
