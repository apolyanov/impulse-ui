import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { table } from '../../styles';
import { TableBaseIComponent, TableHTMLProps } from '../../types';

const BaseTable = styled.table<TableBaseIComponent<TableHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: table,
      globalTheme: themes?.table,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTable };
