import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { Button, Checkbox, Container, IconButton, Link, TextButton } from '../../../src';

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
