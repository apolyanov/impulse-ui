import { useState } from 'react';

import { CompositeCheckboxProps } from '../../../checkbox';

const useCheckbox = (rest: CompositeCheckboxProps) => {
  const { checked, label, ...buttonProps } = rest;

  const [isChecked, setIsChecked] = useState<boolean>(Boolean(checked));

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return { isChecked, label, buttonProps, toggleCheckbox };
};

export { useCheckbox };
