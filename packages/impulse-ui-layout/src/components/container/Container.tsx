'use client';
import React, { PropsWithChildren } from 'react';
import { polymorphicForwardRef } from '@impulse-ui/core';
import { ContainerProps } from '@impulse-ui/types';

import BaseContainer from './BaseContainer.styles';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => (
  <BaseContainer ref={ref} $iStyle={iStyle} {...rest} />
));

export { Container };
