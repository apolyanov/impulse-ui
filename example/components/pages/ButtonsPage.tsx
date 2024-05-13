import React, { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Link, TextButton } from '@impulse-ui/buttons';
import { Checkbox } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@mui/material';

const ButtonsPage = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Container>
      <Typography>Button</Typography>
      <Button onClick={() => console.log('clicked')}>Buttons</Button>
      <Button loading onClick={() => console.log('clicked')}>
        Buttons
      </Button>
      <Button disabled onClick={() => console.log('clicked')}>
        Buttons
      </Button>
      <Button disabled loading onClick={() => console.log('clicked')}>
        Buttons
      </Button>
      <Typography>Text Button</Typography>
      <TextButton>Hello</TextButton>
      <TextButton loading>Hello</TextButton>
      <TextButton disabled>Hello</TextButton>
      <TextButton loading disabled>
        Hello
      </TextButton>
      <Link>Hello</Link>
      <Checkbox checked={check} onClick={({ value }) => setCheck(value)} label={'Click me'} />
      <IconButton icon={faArrowRightFromBracket} />
      <IconButton loading icon={faArrowRightFromBracket} />
      <IconButton disabled icon={faArrowRightFromBracket} />
      <IconButton disabled loading icon={faArrowRightFromBracket} />
    </Container>
  );
};

export default ButtonsPage;
