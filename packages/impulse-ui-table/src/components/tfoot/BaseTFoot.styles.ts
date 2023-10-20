import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import { TFootStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { tfoot } from '../../styles';

const BaseTFoot = styled.tfoot<BaseIComponent<TFootStyleProps>>(
  ({ theme: { themes, mode }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.tfoot.iStyle ?? tfoot.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps<TFootStyleProps>(themes?.tfoot?.iStyleProps ?? tfoot.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);

export { BaseTFoot };
