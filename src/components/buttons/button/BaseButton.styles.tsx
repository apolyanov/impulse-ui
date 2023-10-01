import styled, { css } from 'styled-components';

import { componentsThemes } from '../../theme';
import { BaseIComponent } from '../../types';
import { getThemeMode, mergeProps, mergeThemes } from '../../utils';
import { ButtonStyleProps } from '../types';

const BaseButton = styled.button<BaseIComponent<ButtonStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.button?.iStyle ?? componentsThemes.button.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.button?.iStyleProps ?? componentsThemes.button.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseButton;
