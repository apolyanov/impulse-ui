import { useContext } from 'react';
import { UseIThemeContextFn } from '../types';

import { ITheme } from '../components';

const useIThemeContext: UseIThemeContextFn = () => {
  const context = useContext(ITheme);

  if (!context) {
    throw new Error('useIThemeContext must be used within a Provider');
  }
  return context;
};

export { useIThemeContext };
