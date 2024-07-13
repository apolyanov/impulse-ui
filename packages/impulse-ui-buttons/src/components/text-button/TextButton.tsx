import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { TextButtonProps } from '@impulse-ui/types';
import React, { FunctionComponent } from 'react';

import { textButtonComponentMap } from '../../maps';
import { textButton } from '../../styles';

import { BaseTextButton } from './BaseTextButton.styles';

const TextButton: FunctionComponent<TextButtonProps> = ({ iStyle, ...rest }) => {
  const { children, loading, ...buttonProps } = rest;
  const { buttonStyle, loaderStyle } = useComponentStyle(textButtonComponentMap, rest, textButton, iStyle);

  return (
    <BaseTextButton $iStyle={buttonStyle} $cssProps={extractCssProps(buttonProps)} {...buttonProps}>
      {loading ? <Spinner data-disabled={buttonProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseTextButton>
  );
};

export { TextButton };
