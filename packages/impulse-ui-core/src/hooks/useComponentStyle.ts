'use client';
import { ComponentMap, IOStyle } from '@impulse-ui/types';

import { mergePartialThemes } from '../utils';

const useComponentStyle = <T extends object, E extends object>(
  componentMap: ComponentMap[],
  props: E,
  defaultTheme?: T,
  overridingTheme?: T,
) => constructComplexTheme<T, E>(componentMap, props, defaultTheme, overridingTheme);
const constructComplexTheme = <T extends object, E extends object>(
  componentMap: ComponentMap[],
  props: E,
  defaultTheme?: T,
  overridingTheme?: T,
) => {
  let newObject: any = {};

  componentMap.forEach((themeComponent) => {
    const componentKey = `${themeComponent.key}${themeComponent.prefix ?? 'Style'}`;

    if (!themeComponent.subKeys) {
      newObject[componentKey] = mergePartialThemes({
        defaultTheme: defaultTheme?.[componentKey as keyof T] as IOStyle,
        overridingTheme: overridingTheme?.[componentKey as keyof T] as IOStyle,
        props,
      });
    }

    if (themeComponent.subKeys) {
      newObject[componentKey] = constructComplexTheme(
        themeComponent.subKeys,
        props,
        defaultTheme?.[componentKey as keyof T] as T,
        overridingTheme?.[componentKey as keyof T] as T,
      );
    }
  });

  return newObject as T;
};

export { useComponentStyle };
