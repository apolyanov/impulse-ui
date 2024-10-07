import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseContainer } from '@impulse-ui/layout';
import styled from 'styled-components';

import { spinnerLoader } from '../../styles';

const BaseDots = styled(BaseContainer)(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: spinnerLoader,
    globalTheme: themes?.dotsLoader,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseDots };
