import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

import { componentsThemes } from '../theme';
import { BaseIComponent } from '../types';
import { getThemeMode, mergeProps, mergeThemes } from '../utils';

import { IconStyleProps } from './types';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent<IconStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.icon?.iStyle ?? componentsThemes.icon.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.icon?.iStyleProps ?? componentsThemes.icon.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseIcon;
