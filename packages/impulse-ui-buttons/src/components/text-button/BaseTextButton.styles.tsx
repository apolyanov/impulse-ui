import { createBaseComponentStyle, BaseIComponent } from '@impulse-ui/core';
import styled from 'styled-components';

import { baseTextButton } from '../../styles';

const BaseTextButton = styled.button<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: baseTextButton,
    globalTheme: themes?.textButton,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);
export { BaseTextButton };
