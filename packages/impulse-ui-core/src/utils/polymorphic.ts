import { forwardRef } from 'react';
import { PolyRefFunction } from '../types';

const polymorphicForwardRef = forwardRef as PolyRefFunction;

export { polymorphicForwardRef };
