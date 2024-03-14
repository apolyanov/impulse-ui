'use client';
import React, { forwardRef, PropsWithChildren } from 'react';
import { ContainerProps } from '@impulse-ui/types';

import BaseContainer from './BaseContainer.styles';

const Container = forwardRef<HTMLDivElement, PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => {
  return <BaseContainer ref={ref} $iStyle={iStyle} {...rest} />;
});

export { Container };
