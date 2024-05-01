import React, { Fragment } from 'react';
import { neutral, volcano } from '@impulse-ui/colours';
import { Container } from '@impulse-ui/layout';

const Select = () => {
  return (
    <Fragment>
      <Container
        iStyle={{
          iColorTheme: {
            light: {
              backgroundColor: neutral[10],
              borderColor: volcano[60],
              borderColorHover: volcano[50],
            },
          },
          iCss: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 8px',
            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
            borderStyle: 'solid',
            height: 38,
            maxWidth: 250,
            borderRadius: 4,
            borderWidth: 1,
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }}
      >
        Select
      </Container>
    </Fragment>
  );
};

export { Select };
