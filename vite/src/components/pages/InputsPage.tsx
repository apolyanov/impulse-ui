import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@impulse-ui/buttons";
import { Select, TextInput } from "@impulse-ui/input";
import { Container } from "@impulse-ui/layout";
import { FieldMessage, Typography } from "@impulse-ui/text";
import { useState } from "react";

import { humans2 } from "../mocks/autoCompleteMock";

const InputsPage = () => {
  const [raw] = useState(() => humans2());
  const [options2] = useState<{ gal: string; name: string }[]>(raw);
  const [value, setValue] = useState<{ gal: string; name: string } | null>(
    null
  );

  return (
    <Container>
      <TextInput
        error
        type={"email"}
        debounced
        clearablegray
        onDebouncedChange={(event) => console.log(event.target.value)}
        onChange={(event) => console.log(event.target.value)}
        placeholder={"Email"}
        icon={faEnvelope}
      />
      <TextInput
        disabled
        error
        type={"password"}
        debounced
        onDebouncedChange={(event) => console.log(event.target.value)}
        onChange={(event) => console.log(event.target.value)}
        placeholder={"Email"}
        icon={faEnvelope}
      />
      <Select
        value={value}
        placeholder={"Player"}
        clearButton={{
          clearable: true,
        }}
        options={options2}
        getOptionId={(option) => option.gal}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.gal}
        onOptionSelect={(option) =>
          setValue(
            option && { gal: String(option.value), name: String(option.label) }
          )
        }
      />
      <Button
        onClick={() => {
          console.log("clicked asdasd");
          setValue({ gal: "Alex Polyanov", name: "123456" });
        }}
      >
        Change select value
      </Button>
      <Container minWidth={0}>
        <Typography
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
        >
          asdasdasd asd asd asd asdasdasdasdas dasdasdasdas adsdasdas
        </Typography>
      </Container>
      <FieldMessage type={"success"}>Success</FieldMessage>
      <FieldMessage type={"warning"}>Warning</FieldMessage>
      <FieldMessage type={"error"}>Error</FieldMessage>
      <FieldMessage type={"info"}>Info</FieldMessage>
    </Container>
  );
};

export default InputsPage;
