import { Spacing, SpacingAliases } from '@impulse-ui/types';
declare const borderTransform: (value: string | number) => string;
declare const spacingTransform: (value: string | number, alias: SpacingAliases) => (string | number)[][] | {
    key: Spacing;
    value: string | number;
};
declare const noTransform: (value: string | number) => string | number;
export { borderTransform, noTransform, spacingTransform };
