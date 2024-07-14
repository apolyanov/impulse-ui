import { IconButtonStyle } from '../buttons';
import { TextInputStyle } from '../input';
import { ContainerHTMLProps } from '../layout';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
interface TableHeaderProps<T = {}> extends TableHeaderRestProps {
    iStyle?: Partial<TableHeaderStyle<T>>;
}
interface TableHeaderRestProps {
    tableName?: string;
    showTableControls?: boolean;
    showTableSearch?: boolean;
}
interface TableHeaderStyle<T = {}> {
    containerStyle: IOStyle<ContainerHTMLProps & T>;
    tableNameStyle: IOStyle<TypographyHTMLProps & T>;
    searchInputStyle: Partial<TextInputStyle<T>>;
    filtersButtonStyle: Partial<IconButtonStyle<T>>;
    settingsButtonStyle: Partial<IconButtonStyle<T>>;
}
export type { TableHeaderProps, TableHeaderRestProps, TableHeaderStyle };
