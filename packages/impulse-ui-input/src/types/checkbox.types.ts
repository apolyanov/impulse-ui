import { IComponent } from '@impulse-ui/core';
import { ComponentPropsWithRef, MouseEvent } from 'react';

interface CheckboxProps extends CompositeCheckboxProps, IComponent<CompositeCheckboxProps> {}

type CompositeCheckboxProps = CheckboxRestProps & Omit<ComponentPropsWithRef<'button'>, keyof CheckboxRestProps>;

interface CheckboxRestProps {
  checked?: boolean;
  label?: string;
  onClick?: (onClickCheckboxEvent: OnClickCheckboxEvent) => void;
}

interface OnClickCheckboxEvent {
  event: MouseEvent<HTMLButtonElement>;
  value: boolean;
}

export type { CheckboxProps, CheckboxRestProps, CompositeCheckboxProps };
