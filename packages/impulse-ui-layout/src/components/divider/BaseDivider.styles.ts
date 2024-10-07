import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { divider } from '../../styles';

const BaseDivider = styled.div<BaseIComponent>(({ theme: { themes, mode }, $iCss, $iTheme, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: divider,
    globalTheme: themes?.divider,
    overridingTheme: { iCss: $iCss, iTheme: $iTheme },
    mode,
    rest,
  }),
);

export { BaseDivider };
