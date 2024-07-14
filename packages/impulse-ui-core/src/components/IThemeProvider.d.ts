import { IThemeContext, IThemeProviderProps } from '@impulse-ui/types';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../css/font.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
declare const ITheme: React.Context<IThemeContext | undefined>;
declare const IThemeProvider: FunctionComponent<PropsWithChildren<IThemeProviderProps>>;
export { IThemeProvider };
export { ITheme };
