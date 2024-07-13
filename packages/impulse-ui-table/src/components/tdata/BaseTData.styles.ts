import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
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
