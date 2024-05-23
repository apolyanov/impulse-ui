'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { input } from '../../styles';

const BaseTextInput = styled.input<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: input,
    globalTheme: themes?.input?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);
export default BaseTextInput;
