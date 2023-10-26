import { getThemeMode, mergeProps, mergeThemes } from '@impulse-ui/core';
import { BaseIComponent, TextButtonStyleProps } from '@impulse-ui/types';
import styled, { css } from 'styled-components';

import { textButton } from '../../styles';

const BaseTextButton = styled.button<BaseIComponent<TextButtonStyleProps>>(
  ({ theme: { mode, themes }, $iStyle, $iProps, $parentProps }) => {
    const { iColorTheme, iCss } = mergeThemes(themes?.textButton?.iStyle ?? textButton.iStyle, $iStyle, $parentProps);
    const themeMode = getThemeMode(mode);
    const iProps = mergeProps(themes?.textButton?.iStyleProps ?? textButton.iStyleProps, $iProps);

    return css(iCss({ iColorTheme: iColorTheme[themeMode], iProps }));
  },
);
export default BaseTextButton;
