import { IconButtonStyle, IconButtonStyleProps } from '../buttons';
import { TextInputStyle, TextInputStyleProps } from '../input';
import { ContainerStyleProps } from '../layout';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';

interface TableHeaderProps {
  iStyle?: Partial<TableHeaderStyle>;
  iProps?: Partial<TableHeaderStyleProps>;
}

interface TableHeaderStyle {
  containerStyle: IOStyle<ContainerStyleProps>;
  tableNameTypographyStyle: IOStyle<TypographyStyleProps>;
  searchInputStyle: Partial<TextInputStyle>;
  filtersButtonStyle: Partial<IconButtonStyle>;
  settingsButtonStyle: Partial<IconButtonStyle>;
}

interface TableHeaderStyleProps {
  containerStyleProps: IOProps<ContainerStyleProps>;
  tableNameTypographyStylesProps: IOProps<TypographyStyleProps>;
  searchInputStyleProps: Partial<TextInputStyleProps>;
  filtersButtonStyleProps: Partial<IconButtonStyleProps>;
  settingsButtonStyleProps: Partial<IconButtonStyleProps>;
}

export type { TableHeaderProps, TableHeaderStyle, TableHeaderStyleProps };
