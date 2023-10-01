import 'styled-components';

import { AppTheme } from '../components/theme/types/theme.types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
