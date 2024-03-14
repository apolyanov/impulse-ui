import { IconButtonStyle } from '../buttons';
import { TextInputStyle } from '../input';
import { IOStyle } from '../theme';

interface PaginationProps {
  iStyle?: Partial<PaginationStyle>;
}

interface PaginationStyle {
  containerStyle: IOStyle;
  pageCounterStyle: IOStyle;
  pageInputStyle: Partial<TextInputStyle>;
  pageChangeButtonStyle: Partial<IconButtonStyle>;
}

export type { PaginationProps, PaginationStyle };
