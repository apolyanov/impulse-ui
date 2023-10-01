import styled, { css } from 'styled-components';

import { componentsThemes } from '../../theme';
import { BaseIComponent } from '../../types';
import { getThemeMode, mergeProps, mergeThemes } from '../../utils';
import { InputStyleProps } from '../types';

const BaseTextInput = styled.input<BaseIComponent<InputStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.input?.iStyle ?? componentsThemes.input.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.input?.iStyleProps ?? componentsThemes.input.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseTextInput;
