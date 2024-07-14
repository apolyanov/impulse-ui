import 'styled-components';
import { AppTheme } from '../components';
declare module 'styled-components' {
    interface DefaultTheme extends AppTheme {
    }
}
