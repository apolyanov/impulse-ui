'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TRowStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { trow } from '../../styles';

const BaseTRow = styled.tr<BaseIComponent<TRowStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.trow?.iStyle ?? trow.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TRowStyleProps>(themes?.trow?.iStyleProps ?? trow.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTRow };
