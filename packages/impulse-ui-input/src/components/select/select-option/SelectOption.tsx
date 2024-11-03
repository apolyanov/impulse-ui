import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { FunctionComponent } from 'react';

import { SelectOptionProps } from '../../../types';

const SelectOption: FunctionComponent<SelectOptionProps> = ({ iCss, iTheme, ...rest }) => {
  const { itemText, selected, highlighted, ...mainContainerProps } = rest;

  return (
    <Container {...mainContainerProps}>
      <Typography>{itemText}</Typography>
    </Container>
  );
};

export { SelectOption };
