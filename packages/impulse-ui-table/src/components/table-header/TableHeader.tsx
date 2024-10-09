import { faFilter, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { useImpulseTable } from '../../hooks';
import { tableHeaderComponentMap } from '../../maps';
import { tableHeaderStyle } from '../../styles';
import { TableHeaderProps } from '../../types';

const TableHeader = <T extends object>({ iStyle, ...rest }: TableHeaderProps<T>) => {
  const tableState = useImpulseTable();
  const { showTableControls, showTableSearch, tableName } = rest;
  const { setGlobalFilter } = tableState;
  const { containerStyle, tableNameStyle, filtersButtonStyle, settingsButtonStyle, searchInputStyle } =
    useComponentStyle(tableHeaderComponentMap, tableState, tableHeaderStyle<T>(), iStyle);

  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);
  const handleOnClearSearch = () => setGlobalFilter;

  return (
    <Container {...containerStyle}>
      <Typography {...tableNameStyle}>{tableName}</Typography>
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
