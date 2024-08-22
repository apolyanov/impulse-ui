import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { TextInputStyle } from '@impulse-ui/input';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { TypographyHTMLProps } from '@impulse-ui/text';
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
