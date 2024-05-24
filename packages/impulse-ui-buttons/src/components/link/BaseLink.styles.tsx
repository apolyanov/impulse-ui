'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { link } from '../../styles';

const BaseLink = styled.a<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: link,
    globalTheme: themes?.link?.iStyle,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseLink };
