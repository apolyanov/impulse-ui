'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { container } from '../../styles';

const BaseContainer = styled.div<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: container,
    globalTheme: themes?.container?.iStyle,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseContainer };
