'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createBaseComponentStyle } from '@impulse-ui/core';
import { BaseIComponent } from '@impulse-ui/types';
import styled from 'styled-components';

import { icon } from '../styles';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent>(({ theme: { mode, themes }, $iStyle }) =>
  createBaseComponentStyle({
    baseTheme: icon,
    globalTheme: themes?.icon?.iStyle,
    overridingTheme: $iStyle,
    mode,
  }),
);

export default BaseIcon;
