import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { trow } from '../../styles';

const BaseTRow = styled.tr<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: trow,
    globalTheme: themes?.trow,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTRow };
