import { ColumnDef } from '@tanstack/react-table';

interface ImpulseTableProps<T = unknown> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

export type { ImpulseTableProps };
