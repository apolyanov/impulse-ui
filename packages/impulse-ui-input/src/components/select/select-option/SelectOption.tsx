import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { FunctionComponent } from 'react';

import { selectOptionMap } from '../../../maps';
import { selectOption } from '../../../styles';
import { SelectOptionProps } from '../../../types';

const SelectOption: FunctionComponent<SelectOptionProps> = ({ iStyle, ...rest }) => {
  const { itemText, selected, highlighted, ...mainContainerProps } = rest;

  const { mainContainerStyle, typographyStyle } = useComponentStyle(selectOptionMap, rest, selectOption, iStyle);

  return (
    <Container {...mainContainerStyle} {...mainContainerProps}>
      <Typography {...typographyStyle}>{itemText}</Typography>
    </Container>
  );
};

export { SelectOption };
