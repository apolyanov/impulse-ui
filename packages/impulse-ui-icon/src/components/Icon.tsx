import { extractCssProps } from '@impulse-ui/core';
import { IconProps } from '../types';
import { FunctionComponent } from 'react';

import { BaseIcon } from '../components';

const Icon: FunctionComponent<IconProps> = ({ icon, iStyle, ...rest }) => {
  return <BaseIcon icon={icon} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Icon };
