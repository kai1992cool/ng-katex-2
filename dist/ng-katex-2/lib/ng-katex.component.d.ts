import { EventEmitter } from '@angular/core';
import { KatexOptions } from 'katex';
import * as i0 from "@angular/core";
export declare class KatexComponent {
    equation: string;
    options: KatexOptions;
    onError: EventEmitter<any>;
    hasError(error: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexComponent, "ng-katex", never, { "equation": { "alias": "equation"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "onError": "onError"; }, never, never, true, never>;
}
