import { IconButton } from '@impulse-ui/buttons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ClearButtonProps } from '@impulse-ui/types';

const ClearButton = ({ clearable, focusable, clearIcon, ...rest }: ClearButtonProps) => {
  return clearable && <IconButton tabIndex={focusable ? 0 : -1} icon={clearIcon ?? faXmark} {...rest} />;
};

export { ClearButton };