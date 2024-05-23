'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { baseTHead } from '../../styles';

const BaseTHead = styled.thead<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: baseTHead,
    globalTheme: themes?.thead?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTHead };
