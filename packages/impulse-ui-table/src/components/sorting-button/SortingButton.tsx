import React, { FunctionComponent } from 'react';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { SortingButtonProps } from '@impulse-ui/types';

import { useImpulseTable } from '../../hooks';

const SortingButton: FunctionComponent<SortingButtonProps> = ({ iStyle, columnId, ...rest }) => {
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
      iStyle={iStyle}
      {...rest}
    />
  );
};

export { SortingButton };