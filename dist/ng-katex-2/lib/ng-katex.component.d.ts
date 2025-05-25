import { InputSignal, OutputEmitterRef } from '@angular/core';
import { KatexOptions } from 'katex';
import * as i0 from "@angular/core";
export declare class KatexComponent {
    equation: InputSignal<string>;
    options: InputSignal<KatexOptions>;
    onError: OutputEmitterRef<any>;
    hasError(error: any): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexComponent, "ng-katex", never, { "equation": { "alias": "equation"; "required": true; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, { "onError": "onError"; }, never, never, true, never>;
}
