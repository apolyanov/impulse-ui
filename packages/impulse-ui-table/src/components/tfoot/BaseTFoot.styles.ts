'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { tfoot } from '../../styles';

const BaseTFoot = styled.tfoot<BaseIComponent>(({ theme: { themes, mode }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: tfoot,
    globalTheme: themes?.tfoot?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTFoot };
