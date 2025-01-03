import { Property } from 'csstype';

type PaletteKey = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
type ExtendedPaletteKey = PaletteKey | 150 | 200 | 300;

type ColorPalette2 = {
  [k in PaletteKey]: Property.Color;
};

type ExtendedPalette = ColorPalette2 & {
  [k in ExtendedPaletteKey]: Property.Color;
};

export type { ColorPalette2, ExtendedPalette, ExtendedPaletteKey, PaletteKey };
