import { getThemeColor, getThemeMode, mergeThemes } from '@impulse-ui/core';
import { BaseContainer } from '@impulse-ui/layout';
import styled, { css } from 'styled-components';

import { spinnerLoader } from '../../styles';

const BaseSpinner = styled(BaseContainer)(({ theme: { mode, themes }, $iStyle }) => {
  const { iColorTheme, iCss } = mergeThemes({
    defaultTheme: themes?.spinnerLoader?.iStyle ?? spinnerLoader.iStyle,
    overridingTheme: $iStyle,
  });
  const themeMode = getThemeMode(mode);

  return css(iCss({ iColorTheme: iColorTheme[themeMode], getThemeColor: getThemeColor(iColorTheme[themeMode]) }));
});

export default BaseSpinner;
