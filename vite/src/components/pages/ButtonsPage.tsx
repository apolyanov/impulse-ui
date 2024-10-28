import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Link, TextButton } from "@impulse-ui/buttons";
import { Checkbox } from "@impulse-ui/input";
import { Container } from "@impulse-ui/layout";
import { Typography } from "@impulse-ui/text";
import { useState } from "react";
import { Spinner } from "@impulse-ui/loader";

const ButtonsPage = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Container>
      <Typography
        iCss={({ getMediaQuery }) => ({
          [getMediaQuery("xxs")]: { backgroundColor: "red" },
          [getMediaQuery("xs")]: { backgroundColor: "blue" },
          [getMediaQuery("sm")]: { backgroundColor: "green" },
          [getMediaQuery("md")]: { backgroundColor: "yellow" },
          [getMediaQuery("lg")]: { backgroundColor: "purple" },
          [getMediaQuery("xl")]: { backgroundColor: "gray" },
          [getMediaQuery("xxl")]: { backgroundColor: "orange" },
        })}
        onClick={(event) => console.log(event)}
      >
        Button здравей
      </Typography>
      <Button
        as="span"
        iCss={({ getComponentRef }) => ({
          [getComponentRef(Spinner)]: { backgroundColor: "red" },
        })}
        onClick={(event) => console.log(event)}
      >
        Buttons
      </Button>
      <Button
        iCss={({ getComponentRef }) => ({
          [getComponentRef(Spinner)]: { backgroundColor: "red" },
        })}
        ml={16}
        loading
        onClick={() => console.log("clicked")}
      ></Button>
      <Button disabled onClick={() => console.log("clicked")}>
        Buttons
      </Button>
      <Button disabled loading onClick={() => console.log("clicked")}>
        Buttons
      </Button>
      <Typography>Text Button</Typography>
      <TextButton m={4}>Hello</TextButton>
      <TextButton loading>Hello</TextButton>
      <TextButton disabled>Hello</TextButton>
      <TextButton loading disabled>
        Hello
      </TextButton>
      <Link>Hello</Link>
      <Checkbox
        checked={check}
        onClick={({ value }) => setCheck(value)}
        label={"Click me"}
      />
      <IconButton icon={faArrowRightFromBracket} />
      <IconButton loading icon={faArrowRightFromBracket} />
      <IconButton disabled icon={faArrowRightFromBracket} />
      <IconButton disabled loading icon={faArrowRightFromBracket} />
    </Container>
  );
};

export default ButtonsPage;
