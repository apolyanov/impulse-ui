import { faFilter, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { TableHeaderProps } from '@impulse-ui/types';
import React, { ChangeEvent, FunctionComponent } from 'react';

import { useImpulseTable } from '../../hooks';
import { tableHeaderComponentMap } from '../../maps';
import { tableHeaderStyle } from '../../styles';

const TableHeader: FunctionComponent<TableHeaderProps> = ({ iStyle, ...rest }) => {
  const { showTableControls, showTableSearch, tableName } = rest;
  const { setGlobalFilter } = useImpulseTable();
  const { containerStyle, tableNameStyle, filtersButtonStyle, settingsButtonStyle, searchInputStyle } =
    useComponentStyle(tableHeaderComponentMap, rest, iStyle, tableHeaderStyle);

  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);
  const handleOnClearSearch = () => setGlobalFilter;

  return (
    <Container iStyle={containerStyle}>
      <Typography iStyle={tableNameStyle}>{tableName}</Typography>
      {showTableSearch && (
        <TextInput
          debounced
          onDebouncedChange={handleOnChangeSearch}
          onClear={handleOnClearSearch}
          iStyle={searchInputStyle}
          placeholder={'Search in the table'}
          clearable
          icon={faMagnifyingGlass}
        />
      )}
      {showTableControls && (
        <>
          <IconButton iStyle={filtersButtonStyle} icon={faFilter} />
          <IconButton iStyle={settingsButtonStyle} icon={faSliders} />
        </>
      )}
    </Container>
  );
};

export { TableHeader };
