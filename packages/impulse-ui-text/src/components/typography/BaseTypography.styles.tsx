'use client';
import { getThemeColor, getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { typography } from '../../styles';

const BaseTypography = styled.p<BaseIComponent>(({ theme: { mode, themes }, $iStyle, $parentProps }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.typography?.iStyle ?? typography.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode], getThemeColor: getThemeColor(iColorTheme[themeMode]) }));
});

export default BaseTypography;
