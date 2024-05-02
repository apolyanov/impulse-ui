import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/types';

import { selectOptionMap } from './selectOption.map';

const selectComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'selectOptionsContainer' },
  { key: 'selectedItemTypography' },
  { key: 'dropdownIconButton', subKeys: iconButtonComponentMap },
  { key: 'selectOption', subKeys: selectOptionMap },
  { key: 'loadingTypography' },
  { key: 'noOptionsTypography' },
];

export { selectComponentMap };
