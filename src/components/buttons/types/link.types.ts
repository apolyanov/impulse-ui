import { AnchorHTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../../types';

type LinkStyleProps = ComponentStyleProps;

interface LinkProps extends IComponent<LinkStyleProps>, AnchorHTMLAttributes<HTMLAnchorElement> {}

export type { LinkProps, LinkStyleProps };
