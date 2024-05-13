'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { ButtonProps } from '@impulse-ui/types';

import { buttonComponentMap } from '../../maps';
import { button } from '../../styles';

import { BaseButton } from './BaseButton.styles';

const Button: FunctionComponent<ButtonProps> = ({ iStyle, ...rest }) => {
  const { children, loading, ...buttonProps } = rest;
  const { buttonStyle, loaderStyle } = useComponentStyle(buttonComponentMap, rest, button, iStyle);

  return (
    <BaseButton $iStyle={buttonStyle} {...buttonProps}>
      {loading ? <Spinner data-disabled={buttonProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseButton>
  );
};

export { Button };
