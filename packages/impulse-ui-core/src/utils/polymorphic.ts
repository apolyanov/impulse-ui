import { PolyRefFunction } from '../types';
import { forwardRef } from 'react';

const polymorphicForwardRef = forwardRef as PolyRefFunction;

export { polymorphicForwardRef };
