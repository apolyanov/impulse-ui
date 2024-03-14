import { neutral } from '@impulse-ui/colours';
import { ComponentTheme } from '@impulse-ui/types';

const table: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      borderRadius: 4,
      padding: 8,
      margin: 8,
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
    }),
  },
};

export { table };
