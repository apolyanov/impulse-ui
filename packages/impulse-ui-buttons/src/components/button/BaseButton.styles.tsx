import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseButton } from '../../styles';

const BaseButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseButton,
    globalTheme: themes?.button,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseButton };
