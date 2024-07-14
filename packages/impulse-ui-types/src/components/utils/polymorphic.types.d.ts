import { ComponentPropsWithRef, ElementType, ForwardRefExoticComponent, ForwardRefRenderFunction, ReactElement } from 'react';
type TypeEquality<T, U> = keyof T extends keyof U ? (keyof U extends keyof T ? true : false) : false;
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
type Merge<A, B> = Omit<A, keyof B> & B;
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;
type AsProps<Component extends ElementType, PermanentProps extends object, ComponentProps extends object> = DistributiveMerge<ComponentProps, PermanentProps & {
    as?: Component;
}>;
type PolymorphicWithRef<Default extends OnlyAs, Props extends object = {}, OnlyAs extends ElementType = ElementType> = <T extends OnlyAs = Default>(props: AsProps<T, Props, ComponentPropsWithRef<T>>) => ReactElement | null;
type PolyForwardComponent<Default extends OnlyAs, Props extends object = {}, OnlyAs extends ElementType = ElementType> = Merge<ForwardRefExoticComponent<Merge<ComponentPropsWithRef<Default>, Props & {
    as?: Default;
}>>, PolymorphicWithRef<Default, Props, OnlyAs>>;
type PolyRefFunction = <Default extends OnlyAs, Props extends object = {}, OnlyAs extends ElementType = ElementType>(Component: ForwardRefRenderFunction<any, Props & {
    as?: OnlyAs;
}>) => PolyForwardComponent<Default, Props, OnlyAs>;
export type { AsProps, DistributiveMerge, DistributiveOmit, Merge, PolyForwardComponent, PolymorphicWithRef, PolyRefFunction, TypeEquality, };
