import { TableHeaderStyle } from '@impulse-ui/types';

const tableHeaderStyle: Partial<TableHeaderStyle> = {
  containerStyle: {
    iCss: { flexDirection: 'row', alignItems: 'center', margin: '0 8px', padding: '0 8px', gap: '8px' },
  },
  tableNameStyle: { iCss: { marginRight: 'auto', fontSize: '18px' } },
};

export { tableHeaderStyle };
