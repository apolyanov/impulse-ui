import { ComponentMap } from '@impulse-ui/core';

import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { selectOptionMap } from './selectOption.map';

const selectComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'selectOptionsContainer' },
  { key: 'selectedItemTypography' },
  { key: 'selectPlaceholder' },
  { key: 'dropdownIcon' },
  { key: 'clearButton', subKeys: iconButtonComponentMap },
  { key: 'selectOption', subKeys: selectOptionMap },
  { key: 'loadingSpinner' },
  { key: 'noOptionsTypography' },
];

export { selectComponentMap };
