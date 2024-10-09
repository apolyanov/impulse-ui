import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { FunctionComponent } from 'react';
import { FieldMessageProps } from '../../types';

import { useFieldMessageStyle } from '../../hooks';
import { INFO } from '../../utils';
import { Typography } from '../typography';

const FieldMessage: FunctionComponent<FieldMessageProps> = ({ iStyle, ...rest }) => {
  const { type = INFO, icon, message } = rest;

  const { mainContainerStyle, iconStyle, typographyStyle, getFieldMessageIcon } = useFieldMessageStyle(rest, iStyle);

  return (
    <Container iCss={mainContainerStyle.iCss} iTheme={mainContainerStyle.iTheme}>
      <Icon iCss={iconStyle.iCss} iTheme={iconStyle.iTheme} icon={getFieldMessageIcon(type, icon)} />
      <Typography iCss={typographyStyle.iCss} iTheme={typographyStyle.iTheme}>
        {message}
      </Typography>
    </Container>
  );
};

export { FieldMessage };
