import { textInputComponentMap } from '../input/text-input/theme.map';
import { ThemeMapComponent } from '../types';

import { basicAutoCompleteItemComponentMap } from './basic-auto-complete-item/theme.map';

const basicAutoCompleteComponentMap: ThemeMapComponent[] = [
  { key: 'mainContainer' },
  { key: 'textInput', subKeys: textInputComponentMap },
  { key: 'autoCompleteItemsContainer' },
  { key: 'autoCompleteItem', subKeys: basicAutoCompleteItemComponentMap },
  { key: 'loadingTypography' },
  { key: 'noOptionsTypography' },
];

export { basicAutoCompleteComponentMap };
