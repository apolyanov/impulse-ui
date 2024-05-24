import { PropertiesFallback } from 'csstype';

export type StandardCSSProperties = PropertiesFallback<number | string>;

export interface AliasesCSSProperties {
  m?: StandardCSSProperties['margin'];
  mt?: StandardCSSProperties['marginTop'];
  mr?: StandardCSSProperties['marginRight'];
  mb?: StandardCSSProperties['marginBottom'];
  ml?: StandardCSSProperties['marginLeft'];
  mx?: StandardCSSProperties['marginLeft'];
  marginX?: StandardCSSProperties['marginLeft'];
  my?: StandardCSSProperties['marginTop'];
  marginY?: StandardCSSProperties['marginTop'];
  p?: StandardCSSProperties['padding'];
  pt?: StandardCSSProperties['paddingTop'];
  pr?: StandardCSSProperties['paddingRight'];
  pb?: StandardCSSProperties['paddingBottom'];
  pl?: StandardCSSProperties['paddingLeft'];
  px?: StandardCSSProperties['paddingLeft'];
  paddingX?: StandardCSSProperties['paddingLeft'];
  py?: StandardCSSProperties['paddingTop'];
  paddingY?: StandardCSSProperties['paddingTop'];
}

type Borders = 'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius';

type BordersKeys = Extract<Borders, keyof StandardCSSProperties>;

type BordersCssProps = {
  [K in BordersKeys]: StandardCSSProperties[K];
};

type Display = 'display' | 'overflow' | 'textOverflow' | 'visibility' | 'whiteSpace';

type DisplayKeys = Extract<Display, keyof StandardCSSProperties>;

type DisplayCssProps = {
  [K in DisplayKeys]: StandardCSSProperties[K];
};

type Flexbox =
  | 'flexBasis'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'order'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'alignSelf'
  | 'justifyItems'
  | 'justifySelf';

type FlexboxKeys = Extract<Flexbox, keyof StandardCSSProperties>;

type FlexboxCssProps = {
  [K in FlexboxKeys]: StandardCSSProperties[K];
};

type Grid =
  | 'gap'
  | 'columnGap'
  | 'rowGap'
  | 'gridColumn'
  | 'gridRow'
  | 'gridAutoFlow'
  | 'gridAutoColumns'
  | 'gridAutoRows'
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'gridTemplateAreas'
  | 'gridArea';

type GridKeys = Extract<Grid, keyof StandardCSSProperties>;

type GridCssProps = {
  [K in GridKeys]: StandardCSSProperties[K];
};

type Positions = 'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left';

type PositionsKeys = Extract<Positions, keyof StandardCSSProperties>;

type PositionsCssProps = {
  [K in PositionsKeys]: StandardCSSProperties[K];
};

type Sizing =
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'height'
  | 'maxHeight'
  | 'minHeight'
  | 'sizeWidth'
  | 'sizeHeight'
  | 'boxSizing';

type SizingKeys = Extract<Sizing, keyof StandardCSSProperties>;

type SizingCssProps = {
  [K in SizingKeys]: StandardCSSProperties[K];
};

type SpacingAliases =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'marginX'
  | 'marginY'
  | 'paddingX'
  | 'paddingY';

type Spacing =
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginInline'
  | 'marginInlineStart'
  | 'marginInlineEnd'
  | 'marginBlock'
  | 'marginBlockStart'
  | 'marginBlockEnd'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd';

type SpacingKeys = Extract<Spacing, keyof StandardCSSProperties>;
type SpacingAliasKeys = Extract<SpacingAliases, keyof AliasesCSSProperties>;

type SpacingCssProps = {
  [K in SpacingKeys]: StandardCSSProperties[K];
};

type SpacingAliasCssProps = {
  [K in SpacingAliasKeys]: AliasesCSSProperties[K];
};

type Typography =
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textAlign'
  | 'textTransform';

type TypographyKeys = Extract<Typography, keyof StandardCSSProperties>;

type TypographyCssProps = {
  [K in TypographyKeys]: StandardCSSProperties[K];
};

type CssMapKeys = Borders | Display | Flexbox | Grid | Positions | Sizing | Spacing | SpacingAliases | Typography;

export type {
  Borders,
  BordersCssProps,
  BordersKeys,
  CssMapKeys,
  Display,
  DisplayCssProps,
  DisplayKeys,
  Flexbox,
  FlexboxCssProps,
  FlexboxKeys,
  Grid,
  GridCssProps,
  GridKeys,
  Positions,
  PositionsCssProps,
  PositionsKeys,
  Sizing,
  SizingCssProps,
  SizingKeys,
  Spacing,
  SpacingAliasCssProps,
  SpacingAliases,
  SpacingCssProps,
  SpacingKeys,
  Typography,
  TypographyCssProps,
  TypographyKeys,
};
