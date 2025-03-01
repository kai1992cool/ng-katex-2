import { Segment } from 'extract-math';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { KatexService } from './ng-katex.service';
import * as i0 from "@angular/core";
export declare class KatexHtmlComponent {
    private domSanitizer;
    private katexService;
    constructor(domSanitizer: DomSanitizer, katexService: KatexService);
    allHtml: SafeHtml;
    _html: string;
    private _segments;
    set html(html: string);
    private updateAllHtml;
    get segments(): Segment[];
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexHtmlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexHtmlComponent, "ng-katex-html", never, { "html": "html"; }, {}, never, never, true>;
}
