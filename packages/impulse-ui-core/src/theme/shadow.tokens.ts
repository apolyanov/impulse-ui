import { ColorFormats } from '../types';
import { rgb } from '../utils';

export const shadows = (color: ColorFormats) => ({
  shadow1: `0 1px 2px -1px ${rgb(color)}`,
  shadow2: `
    0 3px 5px -2px ${rgb(color)},
    0 7px 14px -5px ${rgb(color)}`,
  shadow3: `
    0 -1px 3px 0 ${rgb(color)},
    0 1px 2px -5px ${rgb(color)},
    0 2px 5px -5px ${rgb(color)},
    0 4px 12px -5px ${rgb(color)},
    0 12px 15px -5px ${rgb(color)}`,
  shadow4: `
    0 -2px 5px 0 ${rgb(color)},
    0 1px 1px -2px ${rgb(color)},
    0 2px 2px -2px ${rgb(color)},
    0 5px 5px -2px ${rgb(color)},
    0 9px 9px -2px ${rgb(color)},
    0 16px 16px -2px ${rgb(color)}`,
  shadow5: `
    0 -1px 2px 0 ${rgb(color)},
    0 2px 1px -2px ${rgb(color)},
    0 5px 5px -2px ${rgb(color)},
    0 10px 10px -2px ${rgb(color)},
    0 20px 20px -2px ${rgb(color)},
    0 40px 40px -2px ${rgb(color)}`,
  shadow6: `
    0 -1px 2px 0 ${rgb(color)},
    0 3px 2px -2px ${rgb(color)},
    0 7px 5px -2px ${rgb(color)},
    0 12px 10px -2px ${rgb(color)},
    0 22px 18px -2px ${rgb(color)},
    0 41px 33px -2px ${rgb(color)},
    0 100px 80px -2px ${rgb(color)}`,
});
