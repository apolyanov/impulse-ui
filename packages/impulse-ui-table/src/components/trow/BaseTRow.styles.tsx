import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { trow } from '../../styles';
import { TableBaseIComponent, TRowHTMLProps } from '../../types';

const BaseTRow = styled.tr<TableBaseIComponent<TRowHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: trow,
      globalTheme: themes?.trow,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTRow };
