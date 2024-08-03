import { GetOptionId, GetOptionLabel, GetOptionValue, SimpleOption } from '../types';

const processOptions = (
  unProcessedOptions: any[],
  getOptionValue?: GetOptionValue<any>,
  getOptionLabel?: GetOptionLabel<any>,
  getOptionId?: GetOptionId<any>,
): SimpleOption[] => {
  if (unProcessedOptions) {
    return unProcessedOptions.map((option, index) =>
      optionProcessor(option, index, getOptionValue, getOptionLabel, getOptionId),
    );
  }

  return [];
};

const optionProcessor = (
  option: any,
  id: number | string,
  getOptionValue?: GetOptionValue<any>,
  getOptionLabel?: GetOptionLabel<any>,
  getOptionId?: GetOptionId<any>,
) => {
  let newOption: SimpleOption;

  newOption = {
    id: getOptionId?.(option) ?? id,
    value: getOptionValue?.(option) ?? option?.value,
    label: getOptionLabel?.(option) ?? option?.label,
  };

  if (!newOption.value) {
    console.error(
      "You must provide a 'getOptionValue' function when providing object that does not have value property!",
    );
  }

  if (!newOption.label) {
    console.error(
      "You must provide a 'getOptionLabel' and/or function when providing object that does not have label property!",
    );
  }

  return newOption;
};

export { optionProcessor, processOptions };
