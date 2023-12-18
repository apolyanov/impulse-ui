import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { textInputComponentMap } from '@impulse-ui/input';
import { ComponentMap } from '@impulse-ui/types';

const tableHeaderComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'tableNameTypography' },
  { key: 'searchInput', subKeys: textInputComponentMap },
  { key: 'filtersButton', subKeys: iconButtonComponentMap },
  { key: 'settingsButton', subKeys: iconButtonComponentMap },
];

export { tableHeaderComponentMap };