import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/core';
import { textInputComponentMap } from '@impulse-ui/input';

const tableHeaderComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'tableName' },
  { key: 'searchInput', subKeys: textInputComponentMap },
  { key: 'filtersButton', subKeys: iconButtonComponentMap },
  { key: 'settingsButton', subKeys: iconButtonComponentMap },
];

export { tableHeaderComponentMap };
