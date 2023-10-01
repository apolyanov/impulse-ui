import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Container, InputType, TextInput } from '../../../src';

const InputsPage = () => {
  return (
    <Container>
      <TextInput
        error
        type={InputType.EMAIL}
        debounced
        clearable
        onDebouncedChange={(event) => console.log(event.target.value)}
        onChange={(event) => console.log(event.target.value)}
        placeholder={'Email'}
        icon={faEnvelope}
      />
    </Container>
  );
};

export default InputsPage;
