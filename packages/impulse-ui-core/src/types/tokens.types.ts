export type ColorWeights = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type ColorFormats = {
  hex: string;
  rgb: string;
  hsl: string;
};
export type ColorPalette = Record<ColorWeights, ColorFormats>;

export type SpaceSizesKeys = 'none' | 'auto' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Space = Record<SpaceSizesKeys, string>;

export type RatiosNames = 'square' | 'landscape' | 'portrait' | 'widescreen' | 'ultrawide' | 'golden';
export type Ratios = Record<RatiosNames, string>;

export type FontSizesKeys = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge' | 'massive';
export type FontSizes = Record<FontSizesKeys, string>;

export type LineHeightKeys = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type LineHeights = Record<LineHeightKeys, string>;

export type ScreenSizesKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type ScreenSizes = Record<ScreenSizesKeys, string>;

export type FluidFontSizeKeys = 'xs' | 'sm' | 'md' | 'lg';
export type FluidFontSizes = Record<FluidFontSizeKeys, string>;

export type ZIndexKeys = 'layer1' | 'layer2' | 'layer3' | 'layer4' | 'layer5' | 'layerImportant';
export type ZIndexes = Record<ZIndexKeys, string>;

export type FlexKeys = 'none' | 'auto' | 'growShrink' | 'noGrowShrink' | 'grow' | 'initial' | 'inherit';

export type Flex = Record<FlexKeys, string>;

export type FontWeightKey =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';
export type FontWeights = Record<FontWeightKey, string>;

export type LetterSpacingKey = 'tightest' | 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | 'ultraWide';
export type LetterSpacings = Record<LetterSpacingKey, string>;

export type BorderSizeKey = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type BorderSizes = Record<BorderSizeKey, string>;

export type RadiusKey = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'round';
export type Radii = Record<RadiusKey, string>;

export type RadiusDrawnKey = 'drawn1' | 'drawn2' | 'drawn3' | 'drawn4' | 'drawn5' | 'drawn6';
export type RadiiDrawn = Record<RadiusDrawnKey, string>;

export type RadiusBlobKey = 'blob1' | 'blob2' | 'blob3' | 'blob4' | 'blob5';
export type RadiiBlob = Record<RadiusBlobKey, string>;

export type RadiusConditionalKey =
  | 'conditional1'
  | 'conditional2'
  | 'conditional3'
  | 'conditional4'
  | 'conditional5'
  | 'conditional6';
export type RadiiConditional = Record<RadiusConditionalKey, string>;
