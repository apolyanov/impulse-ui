import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseButton } from '../../styles';

const BaseButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseButton,
    globalTheme: themes?.button,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseButton };
