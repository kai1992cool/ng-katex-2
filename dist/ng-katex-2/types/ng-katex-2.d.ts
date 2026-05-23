import * as i0 from '@angular/core';
import { InputSignal, OutputEmitterRef, Signal, ElementRef } from '@angular/core';
import { KatexOptions } from 'katex';
import { SafeHtml } from '@angular/platform-browser';
import { Segment } from 'extract-math';
import * as i1 from '@angular/common';

declare class KatexComponent {
    equation: InputSignal<string>;
    options: InputSignal<KatexOptions>;
    onError: OutputEmitterRef<any>;
    hasError(error: any): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexComponent, "ng-katex", never, { "equation": { "alias": "equation"; "required": true; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, { "onError": "onError"; }, never, never, true, never>;
}

declare class KatexHtmlComponent {
    private domSanitizer;
    private katexService;
    html: InputSignal<string>;
    allHtml: Signal<SafeHtml | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexHtmlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexHtmlComponent, "ng-katex-html", never, { "html": { "alias": "html"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class KatexParagraphComponent {
    paragraph: InputSignal<string>;
    segments: Signal<Segment[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexParagraphComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KatexParagraphComponent, "ng-katex-paragraph", never, { "paragraph": { "alias": "paragraph"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class KatexDirective {
    private el;
    private katexService;
    equation: InputSignal<string>;
    options: InputSignal<KatexOptions>;
    onError: OutputEmitterRef<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<KatexDirective, "[katex]", never, { "equation": { "alias": "katex"; "required": true; "isSignal": true; }; "options": { "alias": "katex-options"; "required": false; "isSignal": true; }; }, { "onError": "onError"; }, never, never, true, never>;
}

declare class KatexService {
    render(equation: string, element: ElementRef, options?: KatexOptions): void;
    renderToString(equation: string, options?: KatexOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KatexService>;
}

declare class KatexModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<KatexModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<KatexModule, never, [typeof i1.CommonModule, typeof KatexDirective, typeof KatexComponent, typeof KatexParagraphComponent, typeof KatexHtmlComponent], [typeof KatexDirective, typeof KatexComponent, typeof KatexParagraphComponent, typeof KatexHtmlComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<KatexModule>;
}

export { KatexComponent, KatexDirective, KatexHtmlComponent, KatexModule, KatexParagraphComponent, KatexService };
