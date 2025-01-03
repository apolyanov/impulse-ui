import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { screens, vars } from '../theme';

export const spaceProperties = defineProperties({
  defaultCondition: 'none',
  conditions: screens,
  properties: {
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
  },
  shorthands: {
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    my: ['marginTop', 'marginBottom'],
  },
});

export const spaceSprinkles = createSprinkles(spaceProperties);
