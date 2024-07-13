import { UseIThemeContextFn } from '@impulse-ui/types';
import { useContext } from 'react';

import { ITheme } from '../components';

const useIThemeContext: UseIThemeContextFn = () => {
  const context = useContext(ITheme);

  if (!context) {
    throw new Error('useIThemeContext must be used within a Provider');
  }
  return context;
};

export default useIThemeContext;
