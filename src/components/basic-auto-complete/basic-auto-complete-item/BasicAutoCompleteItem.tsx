import React, { FunctionComponent } from 'react';

import { Container } from '../../layout';
import { Typography } from '../../text';
import { useComponentStyle } from '../../utils';
import { BasicAutoCompleteIteiProps } from '../types';

import {
  defaultBasicAutoCompleteItemStyle,
  defaultBasicAutoCompleteItemStyleProps,
} from './defaultBasicAutoCompleteItem.styles';
import { basicAutoCompleteItemComponentMap } from './theme.map';

const BasicAutoCompleteItem: FunctionComponent<BasicAutoCompleteIteiProps> = ({ iStyle, iProps, ...rest }) => {
  const { itemText, selected, highlighted, externalScroll, ...mainContainerProps } = rest;

  const { mainContainerStyle, mainContainerStyleProps, typographyStyleProps, typographyStyle } = useComponentStyle(
    basicAutoCompleteItemComponentMap,
    rest,
    defaultBasicAutoCompleteItemStyle,
    defaultBasicAutoCompleteItemStyleProps,
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

export { BasicAutoCompleteItem };
