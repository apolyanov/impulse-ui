import React, { forwardRef, PropsWithChildren } from 'react';

import { ContainerProps } from '../types';

import BaseContainer from './BaseContainer.styles';

const Container = forwardRef<HTMLDivElement, PropsWithChildren<ContainerProps>>(
  ({ iStyle, iProps, parentProps, ...rest }, ref) => {
    return <BaseContainer ref={ref} $parentProps={parentProps} $iProps={iProps} $iStyle={iStyle} {...rest} />;
  },
);

export { Container };
