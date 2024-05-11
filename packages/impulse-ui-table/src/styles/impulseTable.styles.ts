import { neutral } from '@impulse-ui/colours';
import { ImpulseTableStyle } from '@impulse-ui/types';

const impulseTableStyles: Partial<ImpulseTableStyle> = {
  tableContainerStyle: {
    iColorTheme: { light: { backgroundColor: neutral[10], backgroundColorHover: neutral[10] } },
    iCss: {
      width: 'fit-content',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      padding: 8,
    },
  },
};

export { impulseTableStyles };
