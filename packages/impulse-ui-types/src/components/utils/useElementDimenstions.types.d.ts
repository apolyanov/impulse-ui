interface Dimensions {
    width: number;
    height: number;
}
interface UseElementDimensionsFn {
    (element: HTMLElement | null): Dimensions;
}
export type { Dimensions, UseElementDimensionsFn };
