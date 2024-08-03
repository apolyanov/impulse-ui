import { autoCompleteItemComponentMap } from './autoCompleteItem.map';
import { textInputComponentMap } from '@impulse-ui/input';
import { ComponentMap } from '@impulse-ui/core';

const autoCompleteComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'textInput', subKeys: textInputComponentMap },
  { key: 'autoCompleteItemsContainer' },
  { key: 'autoCompleteItem', subKeys: autoCompleteItemComponentMap },
  { key: 'loadingSpinner' },
  { key: 'noOptionsTypography' },
];

export { autoCompleteComponentMap };
