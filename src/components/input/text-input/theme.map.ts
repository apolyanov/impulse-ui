import { iconButtonComponentMap } from '../../buttons/icon-button/theme.map';
import { ThemeMapComponent } from '../../types';

const textInputComponentMap: ThemeMapComponent[] = [
  { key: 'mainContainer' },
  { key: 'inputContainer' },
  { key: 'icon' },
  {
    key: 'clearIcon',
    subKeys: iconButtonComponentMap,
  },
];

export { textInputComponentMap };
