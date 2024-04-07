import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AutoComplete } from '@impulse-ui/auto-complete';
import { Button } from '@impulse-ui/buttons';
import { Container } from '@impulse-ui/layout';

import { humans } from '../mocks/autoCompleteMock';

const AutoCompletePage = () => {
  const [options, setOptions] = useState<{ name: string; gal: string }[]>(() => humans());

  return (
    <Container iStyle={{ iCss: { flexDirection: 'row', height: '700px', width: '100%', gap: '16px' } }}>
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
        extractSimpleOptionValue={(option) => option.name}
        formatOptionText={(option) => option.name}
        onOptionSelect={(optionValue) => console.log(optionValue)}
        inputProps={{
          clearable: true,
          isClearIconFocusable: true,
          icon: faSearch,
        }}
      />
      <Button
        onClick={() => {
          const splicedOptions = options.slice(250, 500);
          setOptions(splicedOptions);
        }}
      >
        Change options
      </Button>
    </Container>
  );
};

export default AutoCompletePage;
