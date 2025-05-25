import { InputSignal, Signal } from '@angular/core';
import { Segment } from 'extract-math';
import * as i0 from "@angular/core";
export declare class KatexParagraphComponent {
    paragraph: InputSignal<string>;
    segments: Signal<Segment[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexParagraphComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexParagraphComponent, "ng-katex-paragraph", never, { "paragraph": { "alias": "paragraph"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
