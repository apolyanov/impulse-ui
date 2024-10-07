const isObject = (value: string | object | Function) => typeof value === 'object';

const merge = <T, E>(target?: T, source?: E) => {
  if (!source) return target;
  if (!target) return source;

  const result = { ...target };
  const sourceKeys = Object.keys(source);

  for (let i = 0; i < sourceKeys.length; i++) {
    let key = sourceKeys[i];
    const sourceValue = source[key];

    if (isObject(sourceValue)) {
      result[key] = merge(target[key], sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }

  return result as T;
};

export { merge };
