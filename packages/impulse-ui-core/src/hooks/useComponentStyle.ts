import { ComponentMap, IOStyle } from '../types';
import { useMemo } from 'react';

import { mergePartialThemes } from '../utils';

const useComponentStyle = <T extends object, E extends object>(
  componentMap: ComponentMap[],
  props: E,
  defaultTheme?: Partial<T>,
  overridingTheme?: Partial<T>,
) =>
  useMemo(
    () => constructComplexTheme<T, E>(componentMap, props, defaultTheme, overridingTheme),
    [componentMap, defaultTheme, overridingTheme, props],
  );
const constructComplexTheme = <T extends object, E extends object>(
  componentMap: ComponentMap[],
  props: E,
  defaultTheme?: Partial<T>,
  overridingTheme?: Partial<T>,
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
