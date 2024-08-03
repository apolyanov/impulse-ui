import { iconButtonComponentMap } from '@impulse-ui/buttons';
import { textInputComponentMap } from '@impulse-ui/input';
import { ComponentMap } from '@impulse-ui/core';

const paginationComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'pageCounter' },
  { key: 'pageInput', subKeys: textInputComponentMap },
  { key: 'pageChangeButton', subKeys: iconButtonComponentMap },
];

export { paginationComponentMap };
