import { iconButtonComponentMap } from '../buttons/icon-button/theme.map';
import { ThemeMapComponent } from '../types';

const checkboxComponentMap: ThemeMapComponent[] = [
  { key: 'mainContainer' },
  { key: 'iconButton', subKeys: iconButtonComponentMap },
  { key: 'typography' },
];

export { checkboxComponentMap };
