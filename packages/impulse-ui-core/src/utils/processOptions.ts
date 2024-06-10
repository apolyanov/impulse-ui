import { GetOptionId, GetOptionLabel, GetOptionValue, SimpleOption } from '@impulse-ui/types';

const getItemText = (option: any, formatOptionText?: GetOptionLabel<any>): string | number => {
  if (formatOptionText) {
    return formatOptionText(option);
  }

  if (option.label) {
    return option.label;
  }

  console.error("You must provide 'getItemText' function!");
  return option.toString();
};

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

  if (getOptionValue) {
    newOption = {
      id: getOptionId?.(option) ?? id,
      value: getOptionValue(option),
      label: getItemText(option, getOptionLabel),
    };

    return newOption;
  }

  if (!option.value && !getItemText) {
    console.error(
      "You must provide a 'extractSimpleOptionValue' and/or 'formatOptionText' function/s when providing custom option objects!",
    );
  }

  newOption = {
    id: getOptionId?.(option) ?? id,
    label: getItemText(option, getOptionLabel),
    value: getItemText(option, getOptionLabel),
  };

  return newOption;
};

export { optionProcessor, processOptions };
