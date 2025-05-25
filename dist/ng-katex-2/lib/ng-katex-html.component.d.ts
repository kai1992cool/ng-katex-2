import { InputSignal, Signal } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class KatexHtmlComponent {
    private domSanitizer;
    private katexService;
    html: InputSignal<string>;
    allHtml: Signal<SafeHtml | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexHtmlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexHtmlComponent, "ng-katex-html", never, { "html": { "alias": "html"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
