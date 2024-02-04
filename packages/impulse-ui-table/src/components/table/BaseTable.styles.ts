'use client';
import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import { TableStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { table } from '../../styles';

const BaseTable = styled.table<BaseIComponent<TableStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.table?.iStyle ?? table.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TableStyleProps>(themes?.table?.iStyleProps ?? table.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTable };
