import { createBaseComponentStyle, BaseIComponent } from '@impulse-ui/core';
import styled from 'styled-components';

import { container } from '../../styles';

const BaseContainer = styled.div<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: container,
    globalTheme: themes?.container,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseContainer };
