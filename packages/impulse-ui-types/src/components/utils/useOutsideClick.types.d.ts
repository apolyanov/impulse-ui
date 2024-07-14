interface OutsideClickCallback {
    (): void;
}
interface UseOutsideClickFn {
    <T extends HTMLElement = HTMLElement>(callback: OutsideClickCallback, htmlDeps?: Array<T | null>): void;
}
export type { OutsideClickCallback, UseOutsideClickFn };
