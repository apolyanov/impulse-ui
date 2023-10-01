import { ButtonHTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TextButtonStyleProps = ComponentStyleProps;

interface TextButtonProps extends IComponent<TextButtonStyleProps>, ButtonHTMLAttributes<HTMLButtonElement> {}

export type { TextButtonProps, TextButtonStyleProps };
