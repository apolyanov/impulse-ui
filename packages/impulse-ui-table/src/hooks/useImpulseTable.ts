import { useContext } from 'react';

import { ImpulseTableContext } from '../components';

const useImpulseTable = () => {
  const table = useContext(ImpulseTableContext);

  if (!table) {
    throw new Error('useImpulseTable should be inside ImpulseTableContext');
  }

  return table;
};

export { useImpulseTable };
