import { ColorFormats } from '../types';

export const hex = (color: ColorFormats): ColorFormats['hex'] => color.hex;
export const rgb = (color: ColorFormats): ColorFormats['rgb'] => color.rgb;
export const hsl = (color: ColorFormats): ColorFormats['hsl'] => color.hsl;
