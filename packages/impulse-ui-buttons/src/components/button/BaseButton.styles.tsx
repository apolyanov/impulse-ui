'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { baseButton } from '../../styles';

const BaseButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...props }) =>
  createBaseComponentStyle({
    baseTheme: baseButton,
    globalTheme: themes?.button?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseButton };
