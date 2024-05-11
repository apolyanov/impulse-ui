'use client';
import { getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { baseButton } from '../../styles';

const BaseButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...props }) => {
  console.log(props);

  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.button?.iStyle ?? baseButton.iStyle,
    overridingTheme: $iStyle,
    props,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode] }));
});

export { BaseButton };
