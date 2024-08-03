import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/core';

const textInputComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'inputContainer' },
  { key: 'input' },
  { key: 'icon' },
  {
    key: 'clearIcon',
    subKeys: iconButtonComponentMap,
  },
];

export { textInputComponentMap };
