import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { FunctionComponent } from 'react';

import { AutoCompleteItemProps } from '../../../types';

const AutoCompleteItem: FunctionComponent<AutoCompleteItemProps> = ({ iCss, iTheme, ...rest }) => {
  const { itemText, selected, highlighted, externalScroll, ...mainContainerProps } = rest;

  return (
    <Container {...mainContainerProps}>
      <Typography>{itemText}</Typography>
    </Container>
  );
};

export { AutoCompleteItem };
