import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { tfoot } from '../../styles';
import { TableBaseIComponent, TFootHTMLProps } from '../../types';

const BaseTFoot = styled.tfoot<TableBaseIComponent<TFootHTMLProps>>(
  ({ theme: { themes, mode }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: tfoot,
      globalTheme: themes?.tfoot,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTFoot };
