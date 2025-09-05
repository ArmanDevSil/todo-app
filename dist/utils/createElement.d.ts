export interface ElementOptions {
    text?: string;
    html?: string | HTMLElement[];
    id?: string;
    classes?: string[];
    type?: string;
}
/**
 * Create an element with multiple options.
 * options: text?: string, id?: string, classes?: string[], type?: string
 **/
export declare function createElement<T extends keyof HTMLElementTagNameMap>(tag: T, options?: ElementOptions): HTMLElement;
//# sourceMappingURL=createElement.d.ts.map