'use client';
import { MouseEvent, useState } from 'react';
import { CompositeCheckboxProps } from '@impulse-ui/types';

const useCheckbox = (rest: CompositeCheckboxProps) => {
  const { checked, label, onClick, ...buttonProps } = rest;

  const [isChecked, setIsChecked] = useState<boolean>(Boolean(checked));
  const getCheckedState = () => checked ?? isChecked;

  const toggleCheckbox = (event: MouseEvent<HTMLButtonElement>) => {
    const value = !getCheckedState();
    onClick?.({ event, value });
    setIsChecked(value);
  };

  return { isChecked, label, buttonProps, toggleCheckbox, getCheckedState, checked };
};

export { useCheckbox };
