import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTBody } from '../../styles';

const BaseTBody = styled.tbody<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseTBody,
    globalTheme: themes?.tbody,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTBody };
