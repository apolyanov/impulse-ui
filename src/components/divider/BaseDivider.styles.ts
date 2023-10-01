import styled, { css } from 'styled-components';

import { componentsThemes } from '../theme';
import { BaseIComponent } from '../types';
import { getThemeMode, mergeProps, mergeThemes } from '../utils';

import { DividerStyleProps } from './types';

const BaseDivider = styled.div<BaseIComponent<DividerStyleProps>>`
  ${({ theme: { themes, mode }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.divider?.iStyle ?? componentsThemes.divider.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(componentsThemes.divider.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseDivider;
