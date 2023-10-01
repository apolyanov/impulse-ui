import React, { createContext, FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { IThemeContext, IThemeProviderProps, ThemeMode } from '../types';

const ITheme = createContext<IThemeContext | undefined>(undefined);

const IThemeProvider: FunctionComponent<IThemeProviderProps> = ({ children, themes, themeMode }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(themeMode ?? ThemeMode.LIGHT);

  return (
    <ITheme.Provider value={{ setCurrentThemeMode, currentThemeMode }}>
      <ThemeProvider theme={{ themes: themes, mode: currentThemeMode }}>{children}</ThemeProvider>
    </ITheme.Provider>
  );
};

export { IThemeProvider };
export { ITheme };
