'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { AutoCompleteItemProps } from '@impulse-ui/types';

import { autoCompleteItemComponentMap } from '../../../maps';
import { defaultAutoCompleteItemStyle } from '../../../styles';

const AutoCompleteItem: FunctionComponent<AutoCompleteItemProps> = ({ iStyle, ...rest }) => {
  const { itemText, selected, highlighted, externalScroll, ...mainContainerProps } = rest;

  const { mainContainerStyle, typographyStyle } = useComponentStyle(
    autoCompleteItemComponentMap,
    rest,
    defaultAutoCompleteItemStyle,
    iStyle,
  );

  return (
    <Container iStyle={mainContainerStyle} {...mainContainerProps}>
      <Typography iStyle={typographyStyle}>{itemText}</Typography>
    </Container>
  );
};

export { AutoCompleteItem };
