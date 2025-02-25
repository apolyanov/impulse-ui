import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { tfoot } from '../../styles';

const BaseTFoot = styled.tfoot<BaseIComponent>(({ theme: { themes, mode }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: tfoot,
    globalTheme: themes?.tfoot,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTFoot };
