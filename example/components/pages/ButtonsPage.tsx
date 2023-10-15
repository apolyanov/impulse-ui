import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Link, TextButton } from '@impulse-ui/buttons';
import { Checkbox } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';

const ButtonsPage = () => {
  return (
    <Container>
      <Button onClick={() => console.log('clicked')}>Buttons</Button>
      <TextButton>Hello</TextButton>
      <Link>Hello</Link>
      <Checkbox label={'Click me'} />
      <IconButton icon={faArrowRightFromBracket} />
    </Container>
  );
};

export default ButtonsPage;
