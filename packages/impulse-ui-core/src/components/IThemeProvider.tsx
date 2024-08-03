import { IThemeContext, IThemeProviderProps, ThemeMode } from '../types';
import { FunctionComponent, PropsWithChildren, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import '../css/font.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { LIGHT } from '../utils';
import { GlobalStyle } from '../components';

const ITheme = createContext<IThemeContext | undefined>(undefined);

const IThemeProvider: FunctionComponent<PropsWithChildren<IThemeProviderProps>> = ({ themes, themeMode, children }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(themeMode ?? LIGHT);

  return (
    <ITheme.Provider value={{ setCurrentThemeMode, currentThemeMode }}>
      <GlobalStyle />
      <ThemeProvider theme={{ themes, mode: currentThemeMode }}>{children}</ThemeProvider>
    </ITheme.Provider>
  );
};

export { IThemeProvider, ITheme };
