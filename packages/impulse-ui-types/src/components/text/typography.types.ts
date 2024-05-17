import { JSX, PropsWithoutRef } from 'react';

import { IComponent } from '../theme';

type TypographyHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['p']>;
type TypographyProps = IComponent;

export type { TypographyHTMLProps, TypographyProps };
