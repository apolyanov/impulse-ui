import 'styled-components';

import { AppTheme } from '../components';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
