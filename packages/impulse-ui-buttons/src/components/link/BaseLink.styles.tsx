import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { link } from '../../styles';

const BaseLink = styled.a<BaseIComponent>(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: link,
    globalTheme: themes?.link,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseLink };
