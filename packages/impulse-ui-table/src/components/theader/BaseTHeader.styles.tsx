import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { theader } from '../../styles';

const BaseTHeader = styled.th<BaseIComponent>(({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: theader,
    globalTheme: themes?.theader,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseTHeader };
