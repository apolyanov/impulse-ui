import React from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type ButtonStyleProps = ComponentStyleProps;

interface ButtonProps extends IComponent<ButtonStyleProps>, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export type { ButtonProps, ButtonStyleProps };
