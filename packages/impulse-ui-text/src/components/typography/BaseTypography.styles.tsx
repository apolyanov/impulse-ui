import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';

import { typography } from '../../styles';

const BaseTypography = styled.p<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: typography,
    globalTheme: themes?.typography,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export default BaseTypography;
