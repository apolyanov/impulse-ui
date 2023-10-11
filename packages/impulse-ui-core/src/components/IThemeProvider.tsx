import React, { createContext, FunctionComponent, useState } from 'react';
import { IThemeContext, IThemeProviderProps, ThemeMode } from '@impulse-ui/types';
import { ThemeProvider } from 'styled-components';

import '../css/index.css';

import { LIGHT } from '../utils';

const ITheme = createContext<IThemeContext | undefined>(undefined);

const IThemeProvider: FunctionComponent<IThemeProviderProps> = ({ children, themes, themeMode }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(themeMode ?? LIGHT);

  return (
    <ITheme.Provider value={{ setCurrentThemeMode, currentThemeMode }}>
      <ThemeProvider theme={{ themes: themes, mode: currentThemeMode }}>{children}</ThemeProvider>
    </ITheme.Provider>
  );
};

export { IThemeProvider };
export { ITheme };
