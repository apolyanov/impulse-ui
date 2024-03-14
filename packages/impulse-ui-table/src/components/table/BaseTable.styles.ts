'use client';
import { getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { table } from '../../styles';

const BaseTable = styled.table<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.table?.iStyle ?? table.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode] }));
});

export { BaseTable };
