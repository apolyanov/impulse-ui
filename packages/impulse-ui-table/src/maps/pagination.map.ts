import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { ComponentMap } from '@impulse-ui/core';
import { textInputComponentMap } from '@impulse-ui/input';

const paginationComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'pageCounter' },
  { key: 'pageInput', subKeys: textInputComponentMap },
  { key: 'pageChangeButton', subKeys: iconButtonComponentMap },
];

export { paginationComponentMap };
