import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, LinkStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { link } from '../../styles';

const BaseLink = styled.a<BaseIComponent<LinkStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.link?.iStyle ?? link.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.link?.iStyleProps ?? link.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  },
);

export default BaseLink;
