import { FlexSprinkles, SpaceSprinkles } from '@impulse-ui/core';
import { boxSprinkles } from '../box.sprinkles.css.ts';
import { styles } from './styles.css.ts';

export const Box = (props: FlexSprinkles & SpaceSprinkles) => {
  const baseSpaceSprinkles = boxSprinkles(props);

  return <div className={`${''} ${baseSpaceSprinkles} ${styles}`}></div>;
};
