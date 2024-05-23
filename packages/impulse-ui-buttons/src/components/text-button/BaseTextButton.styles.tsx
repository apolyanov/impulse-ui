'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { baseTextButton } from '../../styles';

const BaseTextButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: baseTextButton,
    globalTheme: themes?.textButton?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);
export { BaseTextButton };
