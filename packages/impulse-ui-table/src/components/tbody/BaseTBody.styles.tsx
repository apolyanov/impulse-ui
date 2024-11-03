import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTBody } from '../../styles';
import { TableBaseIComponent, TBodyHTMLProps } from '../../types';

const BaseTBody = styled.tbody<TableBaseIComponent<TBodyHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: baseTBody,
      globalTheme: themes?.tbody,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTBody };
