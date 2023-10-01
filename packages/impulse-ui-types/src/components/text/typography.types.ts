import { HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TypographyStyleProps = ComponentStyleProps;

interface TypographyProps extends IComponent<TypographyStyleProps>, HTMLAttributes<HTMLParagraphElement> {}

export type { TypographyProps, TypographyStyleProps };
