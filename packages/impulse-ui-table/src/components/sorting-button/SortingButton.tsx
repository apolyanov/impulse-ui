import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { FunctionComponent } from 'react';

import { useImpulseTable } from '../../hooks';
import { SortingButtonProps } from '../../types';

const SortingButton: FunctionComponent<SortingButtonProps> = ({ columnId, ...rest }) => {
  const { getColumn } = useImpulseTable();
  const column = getColumn(columnId);

  const getSortingIcon = () => {
    switch (column?.getIsSorted()) {
      case 'asc':
        return faSortUp;
      case 'desc':
        return faSortDown;
      case false:
        return faSort;
      default:
        return faSort;
    }
  };

  return (
    <IconButton
      data-button-type={'sorting-button'}
      onClick={column?.getToggleSortingHandler()}
      icon={getSortingIcon()}
      {...rest}
    />
  );
};

export { SortingButton };
