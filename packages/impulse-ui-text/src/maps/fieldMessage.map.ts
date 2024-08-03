import { ComponentMap } from '@impulse-ui/core';

const variantSubKeys: ComponentMap[] = [
  { key: 'success', prefix: '' },
  { key: 'warning', prefix: '' },
  { key: 'info', prefix: '' },
  { key: 'error', prefix: '' },
];

const fieldMessageComponentMap: ComponentMap[] = [
  { key: 'mainContainer', subKeys: variantSubKeys },
  { key: 'icon', subKeys: variantSubKeys },
  { key: 'typography', subKeys: variantSubKeys },
];

export { fieldMessageComponentMap };
