import { JSX, PropsWithoutRef } from 'react';
import { BordersCssProps, DisplayCssProps, FlexboxCssProps, GridCssProps, IComponent, PositionsCssProps, SizingCssProps, SpacingAliasCssProps, SpacingCssProps } from '../theme';
type ContainerHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['div']>;
type ContainerProps = IComponent & Partial<SpacingCssProps> & Partial<SpacingAliasCssProps> & Partial<BordersCssProps> & Partial<FlexboxCssProps> & Partial<GridCssProps> & Partial<PositionsCssProps> & Partial<SizingCssProps> & Partial<DisplayCssProps>;
export type { ContainerHTMLProps, ContainerProps };
