import { Spacing, SpacingAliases } from '../types';

const spacingAliasesMap: Record<SpacingAliases, Spacing | Spacing[]> = {
  m: 'margin',
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: 'padding',
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
};

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
