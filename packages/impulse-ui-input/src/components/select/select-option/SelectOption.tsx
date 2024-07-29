import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { SelectOptionProps } from '@impulse-ui/types';
import { FunctionComponent } from 'react';

import { selectOptionMap } from '../../../maps';
import { selectOption } from '../../../styles';

const SelectOption: FunctionComponent<SelectOptionProps> = ({ iStyle, ...rest }) => {
  const { itemText, selected, highlighted, ...mainContainerProps } = rest;

  const { mainContainerStyle, typographyStyle } = useComponentStyle(selectOptionMap, rest, selectOption, iStyle);

  return (
    <Container iStyle={mainContainerStyle} {...mainContainerProps}>
      <Typography iStyle={typographyStyle}>{itemText}</Typography>
    </Container>
  );
};

export { SelectOption };
