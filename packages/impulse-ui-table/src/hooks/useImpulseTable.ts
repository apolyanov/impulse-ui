'use client';
import { useContext } from 'react';

import { ImpulseTableContext } from '../components';

const useImpulseTable = () => {
  const table = useContext(ImpulseTableContext);

  if (!table?.state) {
    throw new Error('useImpulseTable should be inside ImpulseTableContext');
  }

  return table.state;
};

export { useImpulseTable };
