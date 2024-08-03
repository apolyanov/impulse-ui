import { paddingX } from '@impulse-ui/core';
import { ImpulseTableState, TableFooterStyle } from '../types';

const tableFooterStyles = <T>(): Partial<TableFooterStyle<ImpulseTableState<T>>> => ({
  containerStyle: { iCss: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...paddingX(8) } },
});

export { tableFooterStyles };
