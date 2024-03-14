'use client';
import { getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { trow } from '../../styles';

const BaseTRow = styled.tr<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.trow?.iStyle ?? trow.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode] }));
});

export { BaseTRow };
