import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, ContainerStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { container } from '../../styles';

const BaseContainer = styled.div<BaseIComponent<ContainerStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.container?.iStyle ?? container.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<ContainerStyleProps>(themes?.container?.iStyleProps ?? container.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  },
);

export default BaseContainer;
