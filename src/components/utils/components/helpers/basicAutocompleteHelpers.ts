import { Modifier } from 'react-popper';

import { ExtractSimpleOptionFn, FormatOptionTextFn, InnerSimpleOption } from '../../../basic-auto-complete';

const getItemText = (option: any, formatOptionText?: FormatOptionTextFn<any>): string | number => {
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
  extractSimpleOptionValue?: ExtractSimpleOptionFn<any>,
  formatOptionText?: FormatOptionTextFn<any>,
): InnerSimpleOption[] => {
  if (unProcessedOptions) {
    return unProcessedOptions.map((option, index) => {
      let newOption: InnerSimpleOption;

      if (extractSimpleOptionValue) {
        newOption = {
          uuid: index,
          value: extractSimpleOptionValue(option),
          label: getItemText(option, formatOptionText),
        };

        return newOption;
      }

      if (!option.value && !getItemText) {
        console.error(
          "You must provide a 'extractSimpleOptionValue' and/or 'formatOptionText' function/s when providing custom option objects!",
        );
      }

      newOption = {
        uuid: index,
        label: getItemText(option, formatOptionText),
        value: getItemText(option, formatOptionText),
      };

      return newOption;
    });
  }

  return [];
};

const dropdownModifiers: ReadonlyArray<Modifier<string>> = [
  {
    name: 'flip',
    options: {
      fallbackPlacements: ['top'],
    },
  },
  {
    name: 'width',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
      state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.width = `${state.elements.reference.getBoundingClientRect().width}px`;
    },
  },
];

export { dropdownModifiers, processOptions };
