import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TableHTMLProps } from '@impulse-ui/types';

const table: ComponentTheme<TableHTMLProps> = {
  iStyle: {
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
  },
};

export { table };
