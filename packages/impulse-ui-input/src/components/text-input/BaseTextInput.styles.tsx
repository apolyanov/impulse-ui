import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { input } from '../../styles';

const BaseTextInput = styled.input<BaseIComponent<object>>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: input,
    globalTheme: themes?.input,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);
export default BaseTextInput;
