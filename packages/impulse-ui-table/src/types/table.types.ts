import { JSX } from 'react';
import { IComponent } from '@impulse-ui/core';

type TableHTMLProps = JSX.IntrinsicElements['table'];
type TableProps = IComponent & TableHTMLProps;

export type { TableHTMLProps, TableProps };
