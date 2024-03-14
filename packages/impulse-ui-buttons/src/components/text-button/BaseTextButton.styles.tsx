'use client';
import { getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { textButton } from '../../styles';

const BaseTextButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.textButton?.iStyle ?? textButton.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode] }));
});
export default BaseTextButton;
