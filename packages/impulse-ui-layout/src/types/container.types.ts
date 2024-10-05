import { ComponentPropsWithoutRef } from 'react';

import {
  BordersCssProps,
  ColorsCssProps,
  DisplayCssProps,
  FastOmit,
  FlexboxCssProps,
  GridCssProps,
  IComponent,
  PositionsCssProps,
  SizingCssProps,
  SpacingAliasCssProps,
  SpacingCssProps,
  TypographyCssProps,
} from '@impulse-ui/core';

type ContainerHTMLProps = FastOmit<ComponentPropsWithoutRef<'div'>, 'color'>;

interface ContainerCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps,
    ColorsCssProps,
    TypographyCssProps {}

type PartialContainerCSSProps = Partial<ContainerCSSProps>;

interface ContainerRestProps extends ContainerHTMLProps, PartialContainerCSSProps {}

type ContainerProps = IComponent & ContainerRestProps;

export type { ContainerHTMLProps, ContainerProps, ContainerCSSProps, ContainerRestProps };
