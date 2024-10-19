import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseContainer } from '@impulse-ui/layout';
import styled from 'styled-components';

import { spinnerLoader } from '../../styles';

const BaseSpinner = styled(BaseContainer)(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: spinnerLoader,
    globalTheme: themes?.spinnerLoader,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseSpinner };
