import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/types';

const checkboxComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'iconButton', subKeys: iconButtonComponentMap },
  { key: 'typography' },
];

export { checkboxComponentMap };
