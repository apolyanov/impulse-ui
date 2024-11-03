import { createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { theader } from '../../styles';
import { TableBaseIComponent, THeaderHTMLProps } from '../../types';

const BaseTHeader = styled.th<TableBaseIComponent<THeaderHTMLProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, $tableProps, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: theader,
      globalTheme: themes?.theader,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest: { ...rest, ...$tableProps },
    }),
);

export { BaseTHeader };
