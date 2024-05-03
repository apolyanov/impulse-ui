import { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Select, TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { SimpleOptionValue } from '@impulse-ui/types';

import { humans } from '../mocks/autoCompleteMock';

const InputsPage = () => {
  const [options] = useState<{ name: string; gal: string }[]>(() => humans());
  const [value, setValue] = useState<SimpleOptionValue>();

  return (
    <Container>
      <TextInput
        error
        type={'email'}
        debounced
        onDebouncedChange={(event) => console.log(event.target.value)}
        onChange={(event) => console.log(event.target.value)}
        placeholder={'Email'}
        icon={faEnvelope}
      />
      <Select
        value={value}
        options={options}
        getOptionValue={(option) => option}
        getOptionLabel={(option) => option.name}
        getOptionId={(option) => option.gal}
        onOptionSelect={(option) => setValue(option)}
      />
    </Container>
  );
};

export default InputsPage;
