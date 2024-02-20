'use client';
import React, { createContext, FunctionComponent, PropsWithChildren, useState } from 'react';
import { IThemeContext, IThemeProviderProps, ThemeMode } from '@impulse-ui/types';
import { ThemeProvider } from 'styled-components';

import '../css/font.css';

import { LIGHT } from '../utils';

import { GlobalStyle } from './GlobalStyle';

const ITheme = createContext<IThemeContext | undefined>(undefined);

const IThemeProvider: FunctionComponent<PropsWithChildren<IThemeProviderProps>> = ({ themes, themeMode, children }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(themeMode ?? LIGHT);

  return (
    <ITheme.Provider value={{ setCurrentThemeMode, currentThemeMode }}>
      <GlobalStyle />
      <ThemeProvider theme={{ themes: themes, mode: currentThemeMode }}>{children}</ThemeProvider>
    </ITheme.Provider>
  );
};

export { IThemeProvider };
export { ITheme };
