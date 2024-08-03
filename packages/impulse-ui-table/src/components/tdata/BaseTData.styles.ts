import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { tdata } from '../../styles';

const BaseTData = styled.td<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: tdata,
    globalTheme: themes?.tdata,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTData };
