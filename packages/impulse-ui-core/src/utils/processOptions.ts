import { GetOptionId, GetOptionLabel, GetOptionValue, InnerSimpleOption } from '@impulse-ui/types';

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
): InnerSimpleOption[] => {
  if (unProcessedOptions) {
    return unProcessedOptions.map((option, index) => {
      let newOption: InnerSimpleOption;

      if (getOptionValue) {
        newOption = {
          uuid: getOptionId?.(option) ?? index,
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
        uuid: getOptionId?.(option) ?? index,
        label: getItemText(option, getOptionLabel),
        value: getItemText(option, getOptionLabel),
      };

      return newOption;
    });
  }

  return [];
};

export { processOptions };
