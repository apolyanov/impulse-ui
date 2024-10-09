import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { FunctionComponent } from 'react';

import { autoCompleteItemComponentMap } from '../../../maps';
import { defaultAutoCompleteItemStyle } from '../../../styles';
import { AutoCompleteItemProps } from '../../../types';

const AutoCompleteItem: FunctionComponent<AutoCompleteItemProps> = ({ iStyle, ...rest }) => {
  const { itemText, selected, highlighted, externalScroll, ...mainContainerProps } = rest;

  const { mainContainerStyle, typographyStyle } = useComponentStyle(
    autoCompleteItemComponentMap,
    rest,
    defaultAutoCompleteItemStyle,
    iStyle,
  );

  return (
    <Container {...mainContainerStyle} {...mainContainerProps}>
      <Typography {...typographyStyle}>{itemText}</Typography>
    </Container>
  );
};

export { AutoCompleteItem };
