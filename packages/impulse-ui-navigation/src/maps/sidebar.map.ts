import { ComponentMap } from '@impulse-ui/core';
import { sidebarItemComponentMap } from './sidebarItem.map.ts';

const sidebarComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'sectionDivider' },
  { key: 'item', subKeys: sidebarItemComponentMap },
];

export { sidebarComponentMap };
