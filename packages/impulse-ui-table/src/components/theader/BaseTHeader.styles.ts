'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, THeaderStyleProps, TRowStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { theader } from '../../styles';

const BaseTHeader = styled.th<BaseIComponent<THeaderStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.theader?.iStyle ?? theader.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TRowStyleProps>(themes?.theader?.iStyleProps ?? theader.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTHeader };
