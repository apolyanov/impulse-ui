import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTHead } from '../../styles';
import { TableBaseIComponent, THeadHTMLProps } from '../../types';

const BaseTHead = styled.thead<TableBaseIComponent<THeadHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: baseTHead,
      globalTheme: themes?.thead,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTHead };
