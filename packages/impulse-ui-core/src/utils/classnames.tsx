import { ClassName } from '../types';

const classnames = (...classNames: ClassName[]): string => {
  let className = '';

  for (let i = 0; i < classNames.length; i++) {
    if (typeof classNames[i] === 'string') {
      className && (className += ' ');
      className += classNames[i];
    }
  }

  return className;
};

export { classnames };
