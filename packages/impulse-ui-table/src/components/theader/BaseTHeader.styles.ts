'use client';
import { getThemeColor, getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { theader } from '../../styles';

const BaseTHeader = styled.th<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.theader?.iStyle ?? theader.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode], getThemeColor: getThemeColor(iColorTheme[themeMode]) }));
});

export { BaseTHeader };
