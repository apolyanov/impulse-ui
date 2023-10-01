import { HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../../types';

type TypographyStyleProps = ComponentStyleProps;

interface TypographyProps extends IComponent<TypographyStyleProps>, HTMLAttributes<HTMLParagraphElement> {}

export type { TypographyProps, TypographyStyleProps };
