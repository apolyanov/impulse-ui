import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseContainer } from '@impulse-ui/layout';
import styled from 'styled-components';

import { spinnerLoader } from '../../styles';

const BaseSpinner = styled(BaseContainer)(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: spinnerLoader,
    globalTheme: themes?.spinnerLoader,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export default BaseSpinner;
