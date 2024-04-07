type TypeEquality<T, U> = keyof T extends keyof U ? (keyof U extends keyof T ? true : false) : false;

export type { TypeEquality };
