import React, { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Link, TextButton } from '@impulse-ui/buttons';
import { Checkbox } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';

const ButtonsPage = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Container>
      <Button onClick={() => console.log('clicked')}>Buttons</Button>
      <TextButton>Hello</TextButton>
      <Link>Hello</Link>
      <Checkbox checked={check} onClick={({ value }) => setCheck(value)} label={'Click me'} />
      <IconButton icon={faArrowRightFromBracket} />
    </Container>
  );
};

export default ButtonsPage;
