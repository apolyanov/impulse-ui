import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, InputStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { input } from '../../styles';

const BaseTextInput = styled.input<BaseIComponent<InputStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.input?.iStyle ?? input.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.input?.iStyleProps ?? input.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseTextInput;
