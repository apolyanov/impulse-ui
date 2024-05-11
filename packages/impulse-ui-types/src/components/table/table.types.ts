import { JSX } from 'react';

import { IComponent } from '../theme';

type TableHTMLProps = JSX.IntrinsicElements['table'];
type TableProps = IComponent & TableHTMLProps;

export type { TableHTMLProps, TableProps };
