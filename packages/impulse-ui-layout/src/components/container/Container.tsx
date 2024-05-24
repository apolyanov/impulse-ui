'use client';
import React, { PropsWithChildren } from 'react';
import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { ContainerProps } from '@impulse-ui/types';

import { BaseContainer } from './BaseContainer.styles';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => (
  <BaseContainer ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />
));

export { Container };
