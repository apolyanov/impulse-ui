import { ComponentMap } from '@impulse-ui/types';

import { selectOptionMap } from './selectOption.map';
import { iconButtonComponentMap } from '@impulse-ui/buttons';

const selectComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'selectOptionsContainer' },
  { key: 'selectedItemTypography' },
  { key: 'selectPlaceholder' },
  { key: 'dropdownIcon' },
  { key: 'clearIcon', subKeys: iconButtonComponentMap },
  { key: 'selectOption', subKeys: selectOptionMap },
  { key: 'loadingSpinner' },
  { key: 'noOptionsTypography' },
];

export { selectComponentMap };
