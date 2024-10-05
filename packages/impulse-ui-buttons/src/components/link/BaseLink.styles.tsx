import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { link } from '../../styles';

const BaseLink = styled.a<BaseIComponent<object>>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: link,
    globalTheme: themes?.link,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export { BaseLink };
