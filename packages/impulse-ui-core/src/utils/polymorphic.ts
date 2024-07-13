import { PolyRefFunction } from '@impulse-ui/types';
import { forwardRef } from 'react';

const polymorphicForwardRef = forwardRef as PolyRefFunction;

export { polymorphicForwardRef };
