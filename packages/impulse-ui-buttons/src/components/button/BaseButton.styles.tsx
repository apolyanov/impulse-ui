'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, ButtonStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { button } from '../../styles';

const BaseButton = styled.button<BaseIComponent<ButtonStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.button?.iStyle ?? button.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.button?.iStyleProps ?? button.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export default BaseButton;
