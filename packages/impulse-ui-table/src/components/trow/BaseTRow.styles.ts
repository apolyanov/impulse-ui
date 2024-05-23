'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { trow } from '../../styles';

const BaseTRow = styled.tr<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: trow,
    globalTheme: themes?.trow?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTRow };
