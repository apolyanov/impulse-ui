'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TSegmentStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { baseTBody } from '../../styles';

const BaseTBody = styled.tbody<BaseIComponent<TSegmentStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.tbody?.iStyle ?? baseTBody.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TSegmentStyleProps>(themes?.tbody?.iStyleProps ?? baseTBody.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTBody };
