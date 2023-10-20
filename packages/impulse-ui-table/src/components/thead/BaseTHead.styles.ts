import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import { THeadStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { thead } from '../../styles';

const BaseTHead = styled.thead<BaseIComponent<THeadStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.thead?.iStyle ?? thead.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<THeadStyleProps>(themes?.thead?.iStyleProps ?? thead.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTHead };
