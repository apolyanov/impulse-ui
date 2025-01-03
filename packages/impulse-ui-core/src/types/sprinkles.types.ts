import { flexSprinkles, spaceSprinkles } from '../sprinkles';

export type SpaceSprinkles = Parameters<typeof spaceSprinkles>[0];
export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];

export type SprinklesFn<Props extends object> = {
  properties: Set<keyof Props>;
};
