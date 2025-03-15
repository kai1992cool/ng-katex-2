import { ElementRef, EventEmitter } from '@angular/core';
import { KatexService } from './ng-katex.service';
import { KatexOptions } from 'katex';
import * as i0 from "@angular/core";
export declare class KatexDirective {
    private el;
    private katexService;
    equation: string;
    options: KatexOptions;
    onError: EventEmitter<any>;
    constructor(el: ElementRef, katexService: KatexService);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<KatexDirective, "[katex]", never, { "equation": { "alias": "katex"; "required": false; }; "options": { "alias": "katex-options"; "required": false; }; }, { "onError": "onError"; }, never, never, true, never>;
}
