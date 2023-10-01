import { neutral5 } from '../../theme/colors/neutral';
import { IOStyle } from '../../types/components.types';

const sidebarSectionDividerStyles: IOStyle = {
  iColorTheme: { light: { borderColor: neutral5 } },
  iCss: () => ({ margin: '4px 0' }),
};

export { sidebarSectionDividerStyles };
