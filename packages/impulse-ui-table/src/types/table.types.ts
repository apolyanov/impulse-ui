import { IComponent } from '@impulse-ui/core';
import { JSX } from 'react';

type TableHTMLProps = JSX.IntrinsicElements['table'];
type TableProps = IComponent & TableHTMLProps;

export type { TableHTMLProps, TableProps };
