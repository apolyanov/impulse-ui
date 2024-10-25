import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { BaseIComponent, createBaseComponentStyle } from '@impulse-ui/core';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { icon } from '../styles';

const BaseIcon = styled(FontAwesomeIcon)<BaseIComponent<FontAwesomeIconProps>>(
  ({ theme: { mode, themes }, $iCss, $iTheme, ...rest }) =>
    createBaseComponentStyle({
      baseTheme: icon,
      globalTheme: themes?.icon,
      overridingTheme: { iCss: $iCss, iTheme: $iTheme },
      mode,
      rest,
    }),
);

export { BaseIcon };
