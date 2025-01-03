import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { flex, screens, zIndex } from '../theme';

export const flexProperties = defineProperties({
  conditions: screens,
  defaultCondition: 'none',
  properties: {
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    alignContent: ['flex-start', 'center', 'flex-end', 'stretch', 'space-between', 'space-around'],
    alignSelf: ['auto', 'flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    flex,

    // Visibility and position
    visibility: ['visible', 'hidden', 'collapse'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    zIndex,
  },
  shorthands: {
    align: ['alignItems'],
    justify: ['justifyContent'],
  },
});

export const flexSprinkles = createSprinkles(flexProperties);
