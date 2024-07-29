import { extractCssProps } from '@impulse-ui/core';
import { IconProps } from '@impulse-ui/types';
import { FunctionComponent } from 'react';

import BaseIcon from './BaseIcon.styles';

const Icon: FunctionComponent<IconProps> = ({ icon, iStyle, ...rest }) => {
  return <BaseIcon icon={icon} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Icon };
