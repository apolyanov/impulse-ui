import { JSX } from 'react';

import { IComponent } from '../theme';

type TypographyHTMLProps = JSX.IntrinsicElements['p'];
type TypographyProps = IComponent & TypographyHTMLProps;

export type { TypographyHTMLProps, TypographyProps };
