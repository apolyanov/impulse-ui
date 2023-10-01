import { useContext } from 'react';

import { ITheme } from '../components';
import { UseIThemeContextFn } from '../types';

const useIThemeContext: UseIThemeContextFn = () => {
  const context = useContext(ITheme);

  if (!context) {
    throw new Error('useIThemeContext must be used within a Provider');
  }
  return context;
};

export default useIThemeContext;
