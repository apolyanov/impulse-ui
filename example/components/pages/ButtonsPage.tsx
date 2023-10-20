import React, { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Link, TextButton } from '@impulse-ui/buttons';
import { neutral7, volcano1, volcano6 } from '@impulse-ui/colours';
import { Checkbox } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { CheckboxStyle, CheckboxStyleProps } from '@impulse-ui/types';

const ButtonsPage = () => {
  return (
    <Container>
      <Button onClick={() => console.log('clicked')}>Buttons</Button>
      <TextButton>Hello</TextButton>
      <Link>Hello</Link>
      <Example />
      <input type={'checkbox'} onChange={(event) => console.log(event.target.checked)} />
      <IconButton icon={faArrowRightFromBracket} />
    </Container>
  );
};

export default ButtonsPage;

const checkboxStyle: Partial<CheckboxStyle> = {
  mainContainerStyle: {
    iCss: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      margin: '8px 0',
    },
  },
  iconButtonStyle: {
    buttonStyle: {
      iColorTheme: { light: { backgroundColor: 'transparent', backgroundColorHover: 'transparent' } },
      iCss: {
        minWidth: 'unset',
        width: 'unset',
        minHeight: 'unset',
        height: 'unset',
        padding: 0,
        margin: 0,
      },
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: volcano6,
        },
      },
      iCss: {
        fontSize: '36px',
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': volcano1,
        '& .fa-secondary': {
          filter: `drop-shadow(0 0 36px ${neutral7})`,
        },
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  typographyStyle: { iCss: { fontSize: '12px', margin: '0 6px' } },
};

const checkboxStyleProps: Partial<CheckboxStyleProps> = {
  iconButtonStyleProps: {
    buttonStyleProps: { hasDropShadow: false, hasBorderRadius: false },
  },
};

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      toggleCheckbox={(value) => setIsChecked(value)}
      checked={isChecked}
      iStyle={checkboxStyle}
      iProps={checkboxStyleProps}
      label={'Click me'}
    />
  );
};
