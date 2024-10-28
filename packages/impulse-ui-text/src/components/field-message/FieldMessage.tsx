import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { PropsWithChildren } from 'react';
import { FieldMessageProps } from '../../types';

import { useFieldMessageStyle } from '../../hooks';
import { INFO } from '../../utils';
import { Typography } from '../typography';
import { classnames } from '@impulse-ui/core';

const FieldMessage = ({ iStyle, children, ...rest }: PropsWithChildren<FieldMessageProps>) => {
  const { type = INFO, icon, ...containerProps } = rest;
  const className = classnames('IMUI-FieldMessage-container-root', containerProps.className);

  const { mainContainerStyle, iconStyle, typographyStyle, getFieldMessageIcon } = useFieldMessageStyle(rest, iStyle);

  return (
    <Container
      iCss={mainContainerStyle.iCss}
      iTheme={mainContainerStyle.iTheme}
      {...containerProps}
      className={className}
    >
      <Icon
        iCss={iconStyle.iCss}
        iTheme={iconStyle.iTheme}
        icon={getFieldMessageIcon(type, icon)}
        className='IMUI-FieldMessage-icon'
      />
      <Typography iCss={typographyStyle.iCss} iTheme={typographyStyle.iTheme} className='IMUI-FieldMessage-typography'>
        {children}
      </Typography>
    </Container>
  );
};

export { FieldMessage };
