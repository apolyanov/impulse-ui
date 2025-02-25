import { CssMapKeys, ThemeMode } from '../types';

import { borderTransform, noTransform, spacingTransform } from './transforms';

const LIGHT: ThemeMode = 'light';
const DARK: ThemeMode = 'dark';

const cssPropsMap: Record<CssMapKeys, Function> = {
  alignContent: noTransform,
  alignItems: noTransform,
  alignSelf: noTransform,
  border: borderTransform,
  borderBottom: borderTransform,
  borderLeft: borderTransform,
  borderRadius: noTransform,
  borderRight: borderTransform,
  borderTop: borderTransform,
  bottom: noTransform,
  boxSizing: noTransform,
  columnGap: noTransform,
  display: noTransform,
  flex: noTransform,
  flexBasis: noTransform,
  flexDirection: noTransform,
  flexGrow: noTransform,
  flexShrink: noTransform,
  flexWrap: noTransform,
  fontFamily: noTransform,
  fontSize: noTransform,
  fontStyle: noTransform,
  fontWeight: noTransform,
  gap: noTransform,
  gridArea: noTransform,
  gridAutoColumns: noTransform,
  gridAutoFlow: noTransform,
  gridAutoRows: noTransform,
  gridColumn: noTransform,
  gridRow: noTransform,
  gridTemplateAreas: noTransform,
  gridTemplateColumns: noTransform,
  gridTemplateRows: noTransform,
  height: noTransform,
  justifyContent: noTransform,
  justifyItems: noTransform,
  justifySelf: noTransform,
  left: noTransform,
  letterSpacing: noTransform,
  lineHeight: noTransform,
  m: spacingTransform,
  margin: noTransform,
  marginBlock: noTransform,
  marginBlockEnd: noTransform,
  marginBlockStart: noTransform,
  marginBottom: noTransform,
  marginInline: noTransform,
  marginInlineEnd: noTransform,
  marginInlineStart: noTransform,
  marginLeft: noTransform,
  marginRight: noTransform,
  marginTop: noTransform,
  marginX: spacingTransform,
  marginY: spacingTransform,
  maxHeight: noTransform,
  maxWidth: noTransform,
  mb: spacingTransform,
  minHeight: noTransform,
  minWidth: noTransform,
  ml: spacingTransform,
  mr: spacingTransform,
  mt: spacingTransform,
  mx: spacingTransform,
  my: spacingTransform,
  order: noTransform,
  overflow: noTransform,
  p: spacingTransform,
  padding: noTransform,
  paddingBlock: noTransform,
  paddingBlockEnd: noTransform,
  paddingBlockStart: noTransform,
  paddingBottom: noTransform,
  paddingInline: noTransform,
  paddingInlineEnd: noTransform,
  paddingInlineStart: noTransform,
  paddingLeft: noTransform,
  paddingRight: noTransform,
  paddingTop: noTransform,
  paddingX: spacingTransform,
  paddingY: spacingTransform,
  pb: spacingTransform,
  pl: spacingTransform,
  position: noTransform,
  pr: spacingTransform,
  pt: spacingTransform,
  px: spacingTransform,
  py: spacingTransform,
  right: noTransform,
  rowGap: noTransform,
  sizeHeight: noTransform,
  sizeWidth: noTransform,
  textAlign: noTransform,
  textOverflow: noTransform,
  textTransform: noTransform,
  top: noTransform,
  visibility: noTransform,
  whiteSpace: noTransform,
  width: noTransform,
  zIndex: noTransform,
  borderColor: noTransform,
  backgroundColor: noTransform,
  color: noTransform,
};

export { cssPropsMap, DARK, LIGHT };
