import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TDataStyleProps, TRowStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { tdata } from '../../styles';

const BaseTData = styled.td<BaseIComponent<TDataStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.tdata?.iStyle ?? tdata.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TRowStyleProps>(themes?.tdata?.iStyleProps ?? tdata.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTData };
