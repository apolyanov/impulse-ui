'use client';
import { getThemeColor, getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { baseTBody } from '../../styles';

const BaseTBody = styled.tbody<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.tbody?.iStyle ?? baseTBody,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode], getThemeColor: getThemeColor(iColorTheme[themeMode]) }));
});

export { BaseTBody };
