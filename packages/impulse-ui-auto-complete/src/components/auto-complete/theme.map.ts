import { textInputComponentMap } from '@impulse-ui/input/src/components/text-input/theme.map';
import { ComponentMap } from '@impulse-ui/types';

import { autoCompleteItemComponentMap } from './auto-complete-item';

const autoCompleteComponentMap: ComponentMap[] = [
  { key: 'mainContainer' },
  { key: 'textInput', subKeys: textInputComponentMap },
  { key: 'autoCompleteItemsContainer' },
  { key: 'autoCompleteItem', subKeys: autoCompleteItemComponentMap },
  { key: 'loadingTypography' },
  { key: 'noOptionsTypography' },
];

export { autoCompleteComponentMap };
