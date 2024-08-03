import { paddingX } from '@impulse-ui/core';
import { ImpulseTableState, TableHeaderStyle } from '../types';

const tableHeaderStyle = <T>(): Partial<TableHeaderStyle<ImpulseTableState<T>>> => ({
  containerStyle: {
    iCss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...paddingX(8),
      gap: '8px',
    },
  },
  tableNameStyle: { iCss: { marginRight: 'auto', fontSize: '18px' } },
});

export { tableHeaderStyle };
