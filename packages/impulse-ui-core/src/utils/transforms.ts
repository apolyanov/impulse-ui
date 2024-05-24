import { SpacingAliases } from '@impulse-ui/types';

import { spacingAliasesMap } from './constants';

const borderTransform = (value: string | number) => {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
};

const spacingTransform = (value: string | number, alias: SpacingAliases) => {
  const spacingProps = spacingAliasesMap[alias];

  if (Array.isArray(spacingProps)) {
    return spacingProps.map((propName) => [propName, value]);
  }

  return { key: spacingProps, value };
};

const noTransform = (value: string | number) => value;

export { borderTransform, noTransform, spacingTransform };
