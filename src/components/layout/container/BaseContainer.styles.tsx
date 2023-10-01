import styled, { css } from 'styled-components';

import { componentsThemes } from '../../theme';
import { BaseIComponent } from '../../types';
import { getThemeMode, mergeProps, mergeThemes } from '../../utils';
import { ContainerStyleProps } from '../types';

const BaseContainer = styled.div<BaseIComponent<ContainerStyleProps>>`
  ${({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(
      themes?.container?.iStyle ?? componentsThemes.container.iStyle,
      $iStyle,
      $parentProps,
    );
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<ContainerStyleProps>(
      themes?.container?.iStyleProps ?? componentsThemes.container.iStyleProps,
      $iProps,
    );

    return css(iCss(iColorTheme[themeMode], iProps));
  }}
`;

export default BaseContainer;
