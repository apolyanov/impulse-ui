type TransformedData = Array<string | number>;
interface TransformFn<T> {
    (option: T): string | number;
}
interface UseTransformedDataOptions<T> {
    transformFn: TransformFn<T>;
}
interface UseTransformedDataArgs<T> {
    data: T[];
    options: UseTransformedDataOptions<T>;
}
export type { TransformedData, TransformFn, UseTransformedDataArgs, UseTransformedDataOptions };
