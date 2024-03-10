import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IComponent } from '../theme';

type TRowProps = IComponent & DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export type { TRowProps };
