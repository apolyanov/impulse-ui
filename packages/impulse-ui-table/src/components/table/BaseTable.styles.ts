'use client';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { table } from '../../styles';

const BaseTable = styled.table<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: table,
    globalTheme: themes?.table?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export { BaseTable };
