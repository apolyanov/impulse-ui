'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { theader } from '../../styles';

const BaseTHeader = styled.th<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: theader,
    globalTheme: themes?.theader?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTHeader };
