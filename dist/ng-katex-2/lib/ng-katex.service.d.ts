import { ElementRef } from '@angular/core';
import { KatexOptions } from 'katex';
import * as i0 from "@angular/core";
export declare class KatexService {
    render(equation: string, element: ElementRef, options?: KatexOptions): void;
    renderToString(equation: string, options?: KatexOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KatexService>;
}
