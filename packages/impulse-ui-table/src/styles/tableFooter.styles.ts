import { paddingX } from '@impulse-ui/core';
import { TableFooterStyle } from '@impulse-ui/types';

const tableFooterStyles: Partial<TableFooterStyle> = {
  containerStyle: { iCss: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...paddingX(8) } },
};

export { tableFooterStyles };
