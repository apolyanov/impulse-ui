import { ComponentMap } from '@impulse-ui/core';

import { paginationComponentMap } from './pagination.map';

const tableFooterComponentMap: ComponentMap[] = [
  { key: 'container' },
  { key: 'selectedRows' },
  { key: 'pagination', subKeys: paginationComponentMap },
];

export { tableFooterComponentMap };
