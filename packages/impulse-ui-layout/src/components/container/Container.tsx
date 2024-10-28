import { classnames, extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '../../types';

import { BaseContainer } from '../container';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const className = classnames('IMUI-Container', componentProps.className);

  return (
    <BaseContainer
      ref={ref}
      $iCss={iCss}
      $iTheme={iTheme}
      $cssProps={cssProps}
      {...componentProps}
      className={className}
    />
  );
});

Container.toString = () => BaseContainer.styledComponentId;

export { Container };
