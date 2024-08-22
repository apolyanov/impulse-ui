import { useMemo } from 'react';
import { UseProcessedoptionsProps } from '../types';

import { processOptions } from '../utils';

const useProcessedOptions = <T>(props: UseProcessedoptionsProps<T>) => {
  const { options, getOptionLabel, getOptionId, getOptionValue } = props;

  return useMemo(
    () => processOptions(options, getOptionValue, getOptionLabel, getOptionId),
    [getOptionValue, getOptionLabel, getOptionId, options],
  );
};

export { useProcessedOptions };
