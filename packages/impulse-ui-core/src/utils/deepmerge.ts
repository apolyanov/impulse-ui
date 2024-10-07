const isObject = (value: string | object | Function) => typeof value === 'object';
const isPrimitive = (value: string | object | Function) => typeof value !== 'object' && typeof value !== 'function';
const isFunction = (value: string | object | Function) => typeof value === 'function';

const merge = <T, E>(target?: T, source?: E) => {
  if (!source) return target;
  if (!target) return source;

  const result = {};
  const targetKeys = Object.keys(target);
  const sourceKeys = Object.keys(source);
  let key;

  for (let i = 0; i < targetKeys.length; i++) {
    key = targetKeys[i];

    if (key) {
      if (isObject(target[key])) result[key] = merge(target[key], source[key]);
      if (isPrimitive(target[key])) result[key] = target[key];
      if (isFunction(target[key])) result[key] = target[key];
    }
  }

  for (let i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];

    if (key) {
      if (isObject(source[key])) result[key] = merge(target[key], source[key]);
      if (isPrimitive(source[key])) result[key] = source[key];
      if (isFunction(source[key])) result[key] = source[key];
    }
  }

  return result as T;
};

export { merge };
