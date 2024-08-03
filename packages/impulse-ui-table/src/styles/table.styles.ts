import { neutral } from '@impulse-ui/colours';
import { ImpulseTableState } from '../types';
import { IStyle } from '@impulse-ui/core';

const table: IStyle<ImpulseTableState<any>> = {
  iColorTheme: {
    light: {
      backgroundColor: neutral[10],
      borderColor: 'transparent',
      color: neutral[200],
    },
    dark: {
      backgroundColor: neutral[10],
      borderColor: 'transparent',
      color: neutral[200],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    borderRadius: 4,
    padding: 8,
    margin: 8,
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  }),
};

export { table };
