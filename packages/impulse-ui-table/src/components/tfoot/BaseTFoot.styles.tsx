import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { tfoot } from '../../styles';

const BaseTFoot = styled.tfoot<BaseIComponent>(({ theme: { themes, mode }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: tfoot,
    globalTheme: themes?.tfoot,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseTFoot };
