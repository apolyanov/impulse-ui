import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { table } from '../../styles';

const BaseTable = styled.table<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: table,
    globalTheme: themes?.table,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseTable };
