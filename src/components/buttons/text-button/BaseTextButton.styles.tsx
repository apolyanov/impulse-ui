import styled, { css } from 'styled-components';

import { componentsThemes } from '../../theme';
import { BaseIComponent } from '../../types';
import { getThemeMode, mergeProps, mergeThemes } from '../../utils';
import { TextButtonStyleProps } from '../types';

const BaseTextButton = styled.button<BaseIComponent<TextButtonStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.textButton?.iStyle ?? componentsThemes.textButton.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.textButton?.iStyleProps ?? componentsThemes.textButton.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseTextButton;
