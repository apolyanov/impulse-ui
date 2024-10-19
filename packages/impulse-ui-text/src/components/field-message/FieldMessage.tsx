import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { PropsWithChildren } from 'react';
import { FieldMessageProps } from '../../types';

import { useFieldMessageStyle } from '../../hooks';
import { INFO } from '../../utils';
import { Typography } from '../typography';

const FieldMessage = ({ iStyle, children, ...rest }: PropsWithChildren<FieldMessageProps>) => {
  const { type = INFO, icon } = rest;

  const { mainContainerStyle, iconStyle, typographyStyle, getFieldMessageIcon } = useFieldMessageStyle(rest, iStyle);

  return (
    <Container iCss={mainContainerStyle.iCss} iTheme={mainContainerStyle.iTheme}>
      <Icon iCss={iconStyle.iCss} iTheme={iconStyle.iTheme} icon={getFieldMessageIcon(type, icon)} />
      <Typography iCss={typographyStyle.iCss} iTheme={typographyStyle.iTheme}>
        {children}
      </Typography>
    </Container>
  );
};

export { FieldMessage };
