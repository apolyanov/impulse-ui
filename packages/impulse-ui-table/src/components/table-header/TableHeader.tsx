import { faFilter, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

import { IconButton } from '@impulse-ui/buttons';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { useImpulseTable } from '../../hooks';
import { TableHeaderProps } from '../../types';

const TableHeader = ({ ...rest }: TableHeaderProps) => {
  const tableState = useImpulseTable();
  const { showTableControls, showTableSearch, tableName } = rest;
  const { setGlobalFilter } = tableState;

  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);
  const handleOnClearSearch = () => setGlobalFilter;

  return (
    <Container>
      <Typography>{tableName}</Typography>
      {showTableSearch && (
        <TextInput
          debounced
          onDebouncedChange={handleOnChangeSearch}
          onClear={handleOnClearSearch}
          placeholder={'Search in the table'}
          clearable
          icon={faMagnifyingGlass}
        />
      )}
      {showTableControls && (
        <>
          <IconButton icon={faFilter} />
          <IconButton icon={faSliders} />
        </>
      )}
    </Container>
  );
};

export { TableHeader };
