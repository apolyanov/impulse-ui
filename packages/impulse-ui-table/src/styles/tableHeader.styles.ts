import { paddingX } from '@impulse-ui/core';
import { TableHeaderStyle } from '@impulse-ui/types';

const tableHeaderStyle: Partial<TableHeaderStyle> = {
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
};

export { tableHeaderStyle };
