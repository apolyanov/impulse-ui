import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { AutoCompleteItemProps } from '@impulse-ui/types';

import { defaultAutoCompleteItemStyle, defaultAutoCompleteItemStyleProps } from '../../../styles';

import { autoCompleteItemComponentMap } from './theme.map';

const AutoCompleteItem: FunctionComponent<AutoCompleteItemProps> = ({ iStyle, iProps, ...rest }) => {
  const { itemText, selected, highlighted, externalScroll, ...mainContainerProps } = rest;

  const { mainContainerStyle, mainContainerStyleProps, typographyStyleProps, typographyStyle } = useComponentStyle(
    autoCompleteItemComponentMap,
    rest,
    defaultAutoCompleteItemStyle,
    defaultAutoCompleteItemStyleProps,
    iStyle,
    iProps,
  );

  return (
    <Container iProps={mainContainerStyleProps} iStyle={mainContainerStyle} {...mainContainerProps}>
      <Typography iStyle={typographyStyle} iProps={typographyStyleProps}>
        {itemText}
      </Typography>
    </Container>
  );
};

export { AutoCompleteItem };
