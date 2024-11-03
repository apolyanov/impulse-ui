import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { tdata } from '../../styles';
import { TableBaseIComponent, TDataHTMLProps } from '../../types';

const BaseTData = styled.td<TableBaseIComponent<TDataHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: tdata,
      globalTheme: themes?.tdata,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTData };
