import { IOStyle, ThemeMapComponent } from '../../../types';
import { mergePartialProps, mergePartialThemes } from '../styleHelpers';

const useComponentStyle = <T extends object, K extends object, E extends object>(
  componentMap: ThemeMapComponent[],
  rest: E,
  defaultTheme?: T,
  defaultProps?: K,
  overridingTheme?: T,
  overridingProps?: K,
) => {
  const mergedStyle = constructComplexTheme<T, E>(componentMap, rest, defaultTheme, overridingTheme);
  const mergedProps = constructComplexProps<K>(componentMap, defaultProps, overridingProps);

  return { ...mergedStyle, ...mergedProps };
};

const constructComplexTheme = <T extends object, E extends object>(
  componentMap: ThemeMapComponent[],
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

const constructComplexProps = <K extends object>(
  componentMap: ThemeMapComponent[],
  defaultProps?: K,
  overridingProps?: K,
): K => {
  let newProperties: any = {};

  componentMap.forEach((themeComponent) => {
    const componentKey = `${themeComponent.key}${themeComponent.prefix ?? 'StyleProps'}`;

    if (!themeComponent.subKeys) {
      newProperties[componentKey] = mergePartialProps(
        overridingProps?.[componentKey as keyof K] as K,
        defaultProps?.[componentKey as keyof K] as K,
      );
    }

    if (themeComponent.subKeys) {
      newProperties[componentKey] = constructComplexProps(
        themeComponent.subKeys,
        defaultProps?.[componentKey as keyof K] as K,
        overridingProps?.[componentKey as keyof K] as K,
      );
    }
  });

  return newProperties as K;
};

export { useComponentStyle };
