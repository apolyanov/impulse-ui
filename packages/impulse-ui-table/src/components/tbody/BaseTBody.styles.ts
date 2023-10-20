import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TBodyStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { tbody } from '../../styles';

const BaseTBody = styled.tbody<BaseIComponent<TBodyStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.tbody?.iStyle ?? tbody.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TBodyStyleProps>(themes?.tbody?.iStyleProps ?? tbody.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTBody };
