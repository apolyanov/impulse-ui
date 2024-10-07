import { neutral } from '@impulse-ui/colours';
import { ImpulseTableState, ImpulseTableStyle } from '../types';

const impulseTableStyles = <T>(): Partial<ImpulseTableStyle<ImpulseTableState<T>>> => ({
  tableContainerStyle: {
    iTheme: { light: { backgroundColor: neutral[10] } },
    iCss: {
      width: 'fit-content',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      padding: 8,
    },
  },
});

export { impulseTableStyles };
