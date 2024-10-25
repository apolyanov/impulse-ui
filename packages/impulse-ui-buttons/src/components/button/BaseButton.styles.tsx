import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseButton } from '../../styles';
import { ButtonRestProps } from '../../types';

const BaseButton = styled.button<BaseIComponent<ButtonRestProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: baseButton,
      globalTheme: themes?.button,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest,
    }),
);

export { BaseButton };
