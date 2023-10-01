import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/types';

const textInputComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'inputContainer' },
  { key: 'icon' },
  {
    key: 'clearIcon',
    subKeys: iconButtonComponentMap,
  },
];

export { textInputComponentMap };
