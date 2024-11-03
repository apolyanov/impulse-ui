import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { input } from '../../styles';
import { TextInputCompositeProps } from '../../types';

const BaseTextInput = styled.input<BaseIComponent<TextInputCompositeProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: input,
      globalTheme: themes?.input,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest,
    }),
);
export default BaseTextInput;
