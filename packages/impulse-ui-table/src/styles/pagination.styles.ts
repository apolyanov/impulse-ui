import { ImpulseTableState, PaginationStyle } from '../types';

const paginationStyles = <T>(): Partial<PaginationStyle<ImpulseTableState<T>>> => ({
  containerStyle: { iCss: { marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' } },
  pageInputStyle: { mainContainerStyle: { iCss: { maxWidth: 62, textAlign: 'center' } } },
  pageCounterStyle: { iCss: { flexShrink: 0 } },
  pageChangeButtonStyle: { buttonStyle: { iCss: { height: 32, width: 32, flexShrink: 0, minHeight: 'unset' } } },
});

export { paginationStyles };
