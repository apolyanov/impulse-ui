import { ThemeMapComponent } from '../../types';

const variantSubKeys: ThemeMapComponent[] = [
  { key: 'success', prefix: '' },
  { key: 'warning', prefix: '' },
  { key: 'info', prefix: '' },
  { key: 'error', prefix: '' },
];

const fieldMessageComponentMap: ThemeMapComponent[] = [
  { key: 'mainContainer', subKeys: variantSubKeys },
  { key: 'icon', subKeys: variantSubKeys },
  { key: 'typography', subKeys: variantSubKeys },
];

export { fieldMessageComponentMap };
