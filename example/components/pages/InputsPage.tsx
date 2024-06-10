import { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@impulse-ui/buttons';
import { Select, TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { FieldMessage, Typography } from '@impulse-ui/text';
import { SimpleOption } from '@impulse-ui/types';

import { humans, humans2 } from '../mocks/autoCompleteMock';

const InputsPage = () => {
  const [options] = useState<{ name: string; gal: string }[]>(() => humans());
  const [options2] = useState<{ name: string; gal: string }[]>(() => humans2());
  const [value, setValue] = useState<SimpleOption>();

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
      <TextInput
        disabled
        error
        type={'password'}
        debounced
        onDebouncedChange={(event) => console.log(event.target.value)}
        onChange={(event) => console.log(event.target.value)}
        placeholder={'Email'}
        icon={faEnvelope}
      />
      <Select
        value={value}
        options={options2}
        getOptionId={(option) => option.gal}
        onOptionSelect={(option) => setValue(option)}
      />
      <Button
        onClick={() => {
          console.log('clicked');
          setValue(options2[16]);
        }}
      >
        Change select value
      </Button>
      <Container iStyle={{ iCss: { minWidth: 0 } }}>
        <Typography iStyle={{ iCss: { whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' } }}>
          asdasdasd asd asd asd asdasdasdasdas dasdasdasdas adsdasdas
        </Typography>
      </Container>
      <FieldMessage message={'Success'} type={'success'} />
      <FieldMessage message={'Warning'} type={'warning'} />
      <FieldMessage message={'Error'} type={'error'} />
      <FieldMessage message={'Info'} type={'info'} />
    </Container>
  );
};

export default InputsPage;
