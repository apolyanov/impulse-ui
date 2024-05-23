'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { baseTBody } from '../../styles';

const BaseTBody = styled.tbody<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: baseTBody,
    globalTheme: themes?.tbody?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTBody };
