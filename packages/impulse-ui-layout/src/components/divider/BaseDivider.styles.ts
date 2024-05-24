'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { divider } from '../../styles';

const BaseDivider = styled.div<BaseIComponent>(({ theme: { themes, mode }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: divider,
    globalTheme: themes?.divider?.iStyle,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export default BaseDivider;
