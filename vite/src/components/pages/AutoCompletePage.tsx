import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AutoComplete } from '@impulse-ui/auto-complete';
import { Button } from '@impulse-ui/buttons';
import { Container } from '@impulse-ui/layout';
import { Box } from '@mui/material';
import { useState } from 'react';

import { humans } from '../mocks/autoCompleteMock';

const AutoCompletePage = () => {
  const [selectedState, setSelectedState] = useState();
  const [options, setOptions] = useState<{ name: string; gal: string }[]>(() => humans());
  const [state, setState] = useState<string>();

  return (
    <Container iStyle={{ iCss: { flexDirection: 'row', height: '700px', width: '100%', gap: '16px' } }}>
      <Box />
      <AutoComplete
        iStyle={{
          mainContainerStyle: {
            iCss: {
              maxWidth: 450,
            },
          },
          textInputStyle: {
            mainContainerStyle: {
              iCss: {
                maxWidth: 450,
              },
            },
          },
        }}
        options={options}
        getOptionValue={(option) => option.name}
        getOptionLabel={(option) => option.name}
        getOptionId={(option) => option.gal}
        onOptionSelect={(option) => console.log(option)}
        inputProps={{
          clearable: true,
          isClearIconFocusable: true,
          icon: faSearch,
        }}
      />
      <Button
        onClick={() => {
          const splicedOptions = options.slice(250, 500);
          setState('splicedOptions');
          // setOptions(splicedOptions);
        }}
      >
        Change options
      </Button>
    </Container>
  );
};

export default AutoCompletePage;
