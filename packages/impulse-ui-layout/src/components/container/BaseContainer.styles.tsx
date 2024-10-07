import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { container } from '../../styles';

const BaseContainer = styled.div<BaseIComponent>(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: container,
    globalTheme: themes?.container,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseContainer };
