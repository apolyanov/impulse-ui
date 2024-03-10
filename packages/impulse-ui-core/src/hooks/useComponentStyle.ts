'use client';
import { ComponentMap, IOStyle } from '@impulse-ui/types';

import { mergePartialThemes } from '../utils';

const useComponentStyle = <T extends object, K extends object, E extends object>(
  componentMap: ComponentMap[],
  rest: E,
  defaultTheme?: T,
  overridingTheme?: T,
) => constructComplexTheme<T, E>(componentMap, rest, defaultTheme, overridingTheme);
const constructComplexTheme = <T extends object, E extends object>(
  componentMap: ComponentMap[],
  rest: E,
  defaultTheme?: T,
  overridingTheme?: T,
) => {
  let newObject: any = {};

  componentMap.forEach((themeComponent) => {
    const componentKey = `${themeComponent.key}${themeComponent.prefix ?? 'Style'}`;

    if (!themeComponent.subKeys) {
      newObject[componentKey] = mergePartialThemes(
        overridingTheme?.[componentKey as keyof T] as IOStyle,
        defaultTheme?.[componentKey as keyof T] as IOStyle,
        rest,
      );
    }

    if (themeComponent.subKeys) {
      newObject[componentKey] = constructComplexTheme(
        themeComponent.subKeys,
        rest,
        defaultTheme?.[componentKey as keyof T] as T,
        overridingTheme?.[componentKey as keyof T] as T,
      );
    }
  });

  return newObject as T;
};

export { useComponentStyle };
