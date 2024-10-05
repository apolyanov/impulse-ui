import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ReactElement,
  ComponentPropsWithoutRef,
} from 'react';
import { CssMapKeys } from './cssProps.types.ts';

export type KnownTarget =
  | 'a'
  | 'abbr'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'base'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dialog'
  | 'div'
  | 'dl'
  | 'dt'
  | 'em'
  | 'embed'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'keygen'
  | 'label'
  | 'legend'
  | 'li'
  | 'link'
  | 'main'
  | 'map'
  | 'mark'
  | 'menu'
  | 'menuitem'
  | 'meta'
  | 'meter'
  | 'nav'
  | 'noscript'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'param'
  | 'picture'
  | 'pre'
  | 'progress'
  | 'q'
  | 'rp'
  | 'rt'
  | 'ruby'
  | 's'
  | 'samp'
  | 'script'
  | 'section'
  | 'select'
  | 'small'
  | 'source'
  | 'span'
  | 'strong'
  | 'style'
  | 'sub'
  | 'summary'
  | 'sup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'tr'
  | 'track'
  | 'u'
  | 'ul'
  | 'use'
  | 'var'
  | 'video'
  | 'wbr'
  | 'circle'
  | 'clipPath'
  | 'defs'
  | 'ellipse'
  | 'foreignObject'
  | 'g'
  | 'image'
  | 'line'
  | 'linearGradient'
  | 'marker'
  | 'mask'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'rect'
  | 'stop'
  | 'svg'
  | 'text'
  | 'tspan';

export type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

type TypeEquality<T, U> = T extends U ? (U extends T ? true : false) : false;

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

type Merge<A, B> = Omit<A, keyof B> & B;
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

type AsProps<
  Component extends KnownTarget,
  PermanentProps extends object,
  ComponentProps extends object,
> = DistributiveMerge<ComponentProps, PermanentProps & { as?: Component }>;

type PolymorphicWithRef<Default extends OnlyAs, Props extends object = {}, OnlyAs extends KnownTarget = KnownTarget> = <
  T extends OnlyAs = Default,
>(
  props: AsProps<T, Props, ComponentPropsWithRef<T>>,
) => ReactElement | null;

type PolyForwardComponent<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends KnownTarget = KnownTarget,
> = Merge<
  ForwardRefExoticComponent<Merge<ComponentPropsWithRef<Default>, Props & { as?: Default }>>,
  PolymorphicWithRef<Default, Props, OnlyAs>
>;

type PolyRefFunction = <Default extends OnlyAs, Props extends object = {}, OnlyAs extends KnownTarget = KnownTarget>(
  Component: ForwardRefRenderFunction<any, Props & { as?: OnlyAs }>,
) => PolyForwardComponent<
  Default,
  FastOmit<Props, keyof FastOmit<ComponentPropsWithoutRef<Default>, CssMapKeys>>,
  OnlyAs
>;

export type {
  AsProps,
  DistributiveMerge,
  DistributiveOmit,
  Merge,
  PolyForwardComponent,
  PolymorphicWithRef,
  PolyRefFunction,
  TypeEquality,
};
