import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { icon } from '../styles';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent>(({ theme: { mode, themes }, $iStyle, ...rest }) =>
  createBaseComponentStyle({
    baseTheme: icon,
    globalTheme: themes?.icon,
    overridingTheme: $iStyle,
    mode,
    rest,
  }),
);

export default BaseIcon;
