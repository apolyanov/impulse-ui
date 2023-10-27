import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';

const InputsPage = () => {
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
    </Container>
  );
};

export default InputsPage;
