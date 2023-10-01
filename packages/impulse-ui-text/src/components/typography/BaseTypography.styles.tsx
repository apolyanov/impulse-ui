import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TypographyStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { typography } from '../../styles';

const BaseTypography = styled.p<BaseIComponent<TypographyStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.typography?.iStyle ?? typography.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.typography?.iStyleProps ?? typography.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseTypography;
