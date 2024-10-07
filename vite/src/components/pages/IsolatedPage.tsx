import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@impulse-ui/buttons";

const IsolatedPage = () => {
  return (
    <div style={{ margin: 64 }}>
      <IconButton
        as="span"
        onClick={(event) => console.log(event)}
        disabled
        loading
        icon={faArrowRightFromBracket}
      />
    </div>
  );
};

export default IsolatedPage;
