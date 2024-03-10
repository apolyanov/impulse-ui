'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TSegmentStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { baseTHead } from '../../styles';

const BaseTHead = styled.thead<BaseIComponent<TSegmentStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.thead?.iStyle ?? baseTHead.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TSegmentStyleProps>(themes?.thead?.iStyleProps ?? baseTHead.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTHead };
