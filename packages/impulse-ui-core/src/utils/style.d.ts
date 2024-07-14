import { AnimationHelper, ComponentColors, CreateBaseComponentStyle, IOStyle, IStyle, Margin, MergePartialThemesFnArgs, MergeThemesFnArgs, Padding, ThemeMode } from '@impulse-ui/types';
import { ColorsKeysValues } from '@impulse-ui/types';
import { SimplePseudos } from 'csstype';
declare const extractCssProps: (props: any) => any;
declare const createBaseComponentStyle: CreateBaseComponentStyle;
declare const shouldRenderCssProp: <T>(shouldRender: boolean | undefined, cssProp: T) => T | undefined;
declare const getThemeColor: (componentColors?: ComponentColors) => (colorKey: keyof ColorsKeysValues, stateKey?: SimplePseudos) => (string & {}) | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | "invert" | undefined;
declare const mergeThemes: <T>({ defaultTheme, overridingTheme, props }: MergeThemesFnArgs<T>) => IStyle;
declare const mergePartialThemes: <T>({ defaultTheme, overridingTheme, props, }: MergePartialThemesFnArgs<T>) => IOStyle<T> | undefined;
declare const margin: (value: Margin) => {
    margin: Margin;
};
declare const marginX: (value: Margin) => {
    marginLeft: Margin;
    marginRight: Margin;
};
declare const marginY: (value: Margin) => {
    marginTop: Margin;
    marginBottom: Margin;
};
declare const padding: (value: Padding) => {
    padding: Padding;
};
declare const paddingX: (value: Padding) => {
    paddingLeft: Padding;
    paddingRight: Padding;
};
declare const paddingY: (value: Padding) => {
    paddingTop: Padding;
    paddingBottom: Padding;
};
declare const animationHelper: AnimationHelper;
declare const getThemeMode: (mode: ThemeMode) => ThemeMode;
export { animationHelper, createBaseComponentStyle, extractCssProps, getThemeColor, getThemeMode, margin, marginX, marginY, mergePartialThemes, mergeThemes, padding, paddingX, paddingY, shouldRenderCssProp, };
