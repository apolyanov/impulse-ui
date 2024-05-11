import { JSX } from 'react';

import { IComponent } from '../theme';

type LinkHTMLProps = JSX.IntrinsicElements['a'];

type LinkProps = IComponent & LinkHTMLProps;

export type { LinkHTMLProps, LinkProps };
