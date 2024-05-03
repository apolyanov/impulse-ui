import { TypeEquality } from './polymorphic.types';

interface UseProcessedoptionsProps<T> {
  value?: SimpleOptionValue;
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
  value: SimpleOptionValue;
  label: string | number;
}

interface InnerSimpleOption extends SimpleOption {
  uuid: number | string;
}

export type {
  GetOptionId,
  GetOptionLabel,
  GetOptionValue,
  InnerSimpleOption,
  SimpleOption,
  SimpleOptionValue,
  UseProcessedoptionsProps,
};
