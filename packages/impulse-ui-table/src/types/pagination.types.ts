import { IOStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { TypographyHTMLProps } from '@impulse-ui/text';
import { TextInputStyle } from '@impulse-ui/input';
import { IconButtonStyle } from '@impulse-ui/buttons';
import { ImpulseTableState } from './impulseTableProvider.types.ts';

interface PaginationProps<T extends object> {
  iStyle?: Partial<PaginationStyle<ImpulseTableState<T>>>;
}

interface PaginationStyle<T> {
  containerStyle: IOStyle<ContainerHTMLProps & T>;
  pageCounterStyle: IOStyle<TypographyHTMLProps & T>;
  pageInputStyle: Partial<TextInputStyle<T>>;
  pageChangeButtonStyle: Partial<IconButtonStyle<T>>;
}

export type { PaginationProps, PaginationStyle };
