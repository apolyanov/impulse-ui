import { IComponent } from '@impulse-ui/core';
import { ImpulseTableState } from './impulseTableProvider.types.ts';

interface PaginationProps<T extends object> extends IComponent<ImpulseTableState<T>> {}

export type { PaginationProps };
