import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTextButton } from '../../styles';

const BaseTextButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseTextButton,
    globalTheme: themes?.textButton,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);
export { BaseTextButton };
