import { useEffect, useState } from 'react';

import { BasicAutoComplete, Button, Container } from '../../../src';
import { AdvancedHuman, humans } from '../mocks/autoCompleteMock';

const AutoCompletePage = () => {
  const [options, setOptions] = useState<AdvancedHuman[]>([]);

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <Container iStyle={{ iCss: () => ({ flexDirection: 'row', height: '700px', gap: '16px' }) }}>
      <BasicAutoComplete
        selectOnBlur
        options={humans}
        extractSimpleOptionValue={(option: AdvancedHuman) => option.name}
        formatOptionText={(option: AdvancedHuman) => option.name}
        onOptionSelect={(optionValue) => console.log(optionValue)}
        inputProps={{
          clearable: true,
          isClearIconFocusable: true,
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
