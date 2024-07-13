import { TypeEquality } from './polymorphic.types';

interface UseProcessedoptionsProps<T> {
  value?: SimpleOption | T | any;
  options: TypeEquality<T, SimpleOption> extends true ? SimpleOption[] : T[];
  getOptionValue?: GetOptionValue<T>;
  getOptionLabel?: GetOptionLabel<T>;
  getOptionId?: GetOptionId<T>;
}

type SimpleOptionValue = string | number | Object | Object[];

interface GetOptionLabel<T> {
  (option: T): string | number;
}

type GetOptionId<T> = GetOptionLabel<T>;

interface GetOptionValue<T> {
  (option: T): SimpleOptionValue;
}

interface SimpleOption {
  id?: number | string;
  value: SimpleOptionValue;
  label: string | number;
}

export type { GetOptionId, GetOptionLabel, GetOptionValue, SimpleOption, SimpleOptionValue, UseProcessedoptionsProps };
