'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getThemeColor, getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { icon } from '../styles';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.icon?.iStyle ?? icon.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode], getThemeColor: getThemeColor(iColorTheme[themeMode]) }));
});

export default BaseIcon;
