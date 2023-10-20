import React, { FunctionComponent } from 'react';
import { faFilter, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { TableHeaderProps } from '@impulse-ui/types';

import { tableHeaderComponentMap } from '../../maps';
import { tableHeaderStyle } from '../../styles';

const TableHeader: FunctionComponent<TableHeaderProps> = ({ iStyle, iProps, ...rest }) => {
  const {
    containerStyle,
    tableNameTypographyStyle,
    filtersButtonStyle,
    settingsButtonStyle,
    filtersButtonStyleProps,
    tableNameTypographyStylesProps,
    containerStyleProps,
    settingsButtonStyleProps,
    searchInputStyleProps,
    searchInputStyle,
  } = useComponentStyle(tableHeaderComponentMap, rest, iStyle, iProps, tableHeaderStyle);

  return (
    <Container iProps={containerStyleProps} iStyle={containerStyle}>
      <Typography iProps={tableNameTypographyStylesProps} iStyle={tableNameTypographyStyle}>
        Table name
      </Typography>
      <TextInput
        iStyle={searchInputStyle}
        iProps={searchInputStyleProps}
        placeholder={'Search in the table'}
        clearable
        icon={faMagnifyingGlass}
      />
      <IconButton iProps={filtersButtonStyleProps} iStyle={filtersButtonStyle} icon={faFilter} />
      <IconButton iProps={settingsButtonStyleProps} iStyle={settingsButtonStyle} icon={faSliders} />
    </Container>
  );
};

export { TableHeader };
