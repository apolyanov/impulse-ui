import styled, { css } from 'styled-components';

import { componentsThemes } from '../../theme';
import { BaseIComponent } from '../../types';
import { getThemeMode, mergeProps, mergeThemes } from '../../utils';
import { TypographyStyleProps } from '../types';

const BaseTypography = styled.p<BaseIComponent<TypographyStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.typography?.iStyle ?? componentsThemes.typography.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.typography?.iStyleProps ?? componentsThemes.typography.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseTypography;
