import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTHead } from '../../styles';

const BaseTHead = styled.thead<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseTHead,
    globalTheme: themes?.thead,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTHead };
