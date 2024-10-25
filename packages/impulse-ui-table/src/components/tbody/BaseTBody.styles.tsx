import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTBody } from '../../styles';
import { ImpulseTableState } from '../../types';

const BaseTBody = styled.tbody<BaseIComponent<ImpulseTableState<any>>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
    createBaseComponentStyle<ImpulseTableState<any>>({
      baseTheme: baseTBody,
      globalTheme: themes?.tbody,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest,
    }),
);

export { BaseTBody };
