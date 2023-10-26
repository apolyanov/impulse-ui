import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, DividerStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { divider } from '../../styles';

const BaseDivider = styled.div<BaseIComponent<DividerStyleProps>>(
  ({ theme: { themes, mode }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.divider?.iStyle ?? divider.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(divider.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export default BaseDivider;
