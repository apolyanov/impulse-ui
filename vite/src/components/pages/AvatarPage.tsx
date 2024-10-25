import { Avatar, AvatarImage } from "@impulse-ui/avatar";
import { Container } from "@impulse-ui/layout";

const AvatarPage = () => {
  console.log(AvatarImage.toString());

  return (
    <Container>
      <Avatar />
    </Container>
  );
};

export default AvatarPage;
