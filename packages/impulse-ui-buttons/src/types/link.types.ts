import { ComponentPropsWithRef } from 'react';

import {
  BordersCssProps,
  DisplayCssProps,
  FlexboxCssProps,
  GridCssProps,
  IComponent,
  PositionsCssProps,
  SizingCssProps,
  SpacingAliasCssProps,
  SpacingCssProps,
} from '@impulse-ui/core';

type LinkHTMLProps = ComponentPropsWithRef<'a'>;

interface LinkCSSProps
  extends LinkHTMLProps,
    SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps {}

type PartialLinkCSSProps = Partial<LinkCSSProps>;

type LinkProps = IComponent & PartialLinkCSSProps;

export type { LinkHTMLProps, LinkProps };
