import { InputSignal, OutputEmitterRef } from '@angular/core';
import { KatexOptions } from 'katex';
import * as i0 from "@angular/core";
export declare class KatexDirective {
    private el;
    private katexService;
    equation: InputSignal<string>;
    options: InputSignal<KatexOptions>;
    onError: OutputEmitterRef<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<KatexDirective, "[katex]", never, { "equation": { "alias": "katex"; "required": true; "isSignal": true; }; "options": { "alias": "katex-options"; "required": false; "isSignal": true; }; }, { "onError": "onError"; }, never, never, true, never>;
}
