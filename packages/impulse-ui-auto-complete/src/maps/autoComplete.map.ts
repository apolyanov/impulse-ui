import { textInputComponentMap } from '@impulse-ui/input';
import { ComponentMap } from '@impulse-ui/types';

import { autoCompleteItemComponentMap } from './autoCompleteItem.map';

const autoCompleteComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'textInput', subKeys: textInputComponentMap },
  { key: 'autoCompleteItemsContainer' },
  { key: 'autoCompleteItem', subKeys: autoCompleteItemComponentMap },
  { key: 'loadingSpinner' },
  { key: 'noOptionsTypography' },
];

export { autoCompleteComponentMap };
