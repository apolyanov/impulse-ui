import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, IconStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { icon } from '../styles';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent<IconStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.icon?.iStyle ?? icon.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.icon?.iStyleProps ?? icon.iStyleProps, $iProps);

    return css(iCss(iColorTheme[themeMode], iProps));
  },
);

export default BaseIcon;
