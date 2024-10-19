import { ImpulseTableState, TableFooterStyle } from '../types';

const tableFooterStyles = <T>(): Partial<TableFooterStyle<ImpulseTableState<T>>> => ({
  containerStyle: {
    iCss: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 8, paddingRight: 8 },
  },
});

export { tableFooterStyles };
