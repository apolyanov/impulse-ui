import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';

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

export { BaseIcon };
