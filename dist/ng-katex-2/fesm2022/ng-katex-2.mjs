import * as i0 from '@angular/core';
import { Injectable, inject, ElementRef, input, output, effect, Directive, Component, computed, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { render, renderToString } from 'katex';
import { extractMath } from 'extract-math';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

class KatexService {
    render(equation, element, options) {
        return render(equation, element.nativeElement, options);
    }
    renderToString(equation, options) {
        return renderToString(equation, options);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexService, decorators: [{
            type: Injectable
        }] });

const throwNoProviderError = () => {
    const katexService = inject(KatexService, {
        optional: true,
    });
    if (!katexService) {
        throw new Error(`
        KatexService is not provided. Please provide it in your module
        
        If using modules:

        import { KatexModule } from 'ng-katex';
        import { BrowserModule } from '@angular/platform-browser';
        ...
        @NgModule({
          imports: [
            BrowserModule,
            KatexModule,
            ...
          ],
          declarations: [AppComponent],
          bootstrap: [AppComponent]
        })

        class AppModule {}
        
        If using standalone bootstrapping:

        import { bootstrapApplication } from '@angular/platform-browser';
        import { importProvidersFrom } from '@angular/core';
        import { KatexModule } from 'ng-katex';

        bootstrapApplication(AppComponent, {
          providers: [
            importProvidersFrom(KatexModule)
          ]
        }).catch(err => console.error(err));

        Docs: https://www.npmjs.com/package/ng-katex-2
        `);
    }
};

class KatexDirective {
    constructor() {
        this.el = inject(ElementRef);
        this.katexService = inject(KatexService);
        this.equation = input.required({
            alias: 'katex',
        });
        this.options = input({}, {
            alias: 'katex-options'
        });
        this.onError = output();
        throwNoProviderError();
        effect(() => {
            try {
                this.katexService.render(this.equation(), this.el, this.options());
            }
            catch (e) {
                this.onError.emit(e);
            }
        });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.13", type: KatexDirective, isStandalone: true, selector: "[katex]", inputs: { equation: { classPropertyName: "equation", publicName: "katex", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "katex-options", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onError: "onError" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[katex]',
                    standalone: true,
                }]
        }], ctorParameters: () => [] });

class KatexComponent {
    hasError(error) {
        this.onError.emit(error);
    }
    constructor() {
        this.equation = input.required();
        this.options = input({});
        this.onError = output();
        throwNoProviderError();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.13", type: KatexComponent, isStandalone: true, selector: "ng-katex", inputs: { equation: { classPropertyName: "equation", publicName: "equation", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onError: "onError" }, ngImport: i0, template: `
    <span [katex]="equation()"
          [katex-options]="options()"
          (someEvent)="hasError($event)">
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: KatexDirective, selector: "[katex]", inputs: ["katex", "katex-options"], outputs: ["onError"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex',
                    template: `
    <span [katex]="equation()"
          [katex-options]="options()"
          (someEvent)="hasError($event)">
    </span>
  `,
                    standalone: true,
                    imports: [KatexDirective],
                }]
        }], ctorParameters: () => [] });

class KatexParagraphComponent {
    constructor() {
        this.paragraph = input.required();
        this.segments = computed(() => {
            let segments = [];
            const paragraph = this.paragraph();
            segments = extractMath(paragraph);
            return segments;
        });
        throwNoProviderError();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexParagraphComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: KatexParagraphComponent, isStandalone: true, selector: "ng-katex-paragraph", inputs: { paragraph: { classPropertyName: "paragraph", publicName: "paragraph", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: `
    <p>
      @for (segment of segments(); track segment) {
        @if (segment.math) {
          <ng-katex
            [equation]="segment.raw"
            [options]="{ displayMode: segment.type === 'display' }">
          </ng-katex>
        } @else {
          {{ segment.value }}
        }
      }
    </p>
    `, isInline: true, dependencies: [{ kind: "component", type: KatexComponent, selector: "ng-katex", inputs: ["equation", "options"], outputs: ["onError"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexParagraphComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-paragraph',
                    template: `
    <p>
      @for (segment of segments(); track segment) {
        @if (segment.math) {
          <ng-katex
            [equation]="segment.raw"
            [options]="{ displayMode: segment.type === 'display' }">
          </ng-katex>
        } @else {
          {{ segment.value }}
        }
      }
    </p>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [KatexComponent],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });

class KatexHtmlComponent {
    constructor() {
        this.domSanitizer = inject(DomSanitizer);
        this.katexService = inject(KatexService);
        this.html = input('');
        this.allHtml = computed(() => {
            const html = this.html();
            let allHtmlValue = '';
            let _segments = [];
            if (!html) {
                allHtmlValue = '';
                _segments = [];
                return allHtmlValue;
            }
            _segments = extractMath(html);
            const allHtml = _segments.map((seg) => {
                if (seg.math) {
                    return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
                }
                else {
                    return seg.value;
                }
            }).reduce((total, current) => {
                return total += current;
            });
            return this.domSanitizer.bypassSecurityTrustHtml(allHtml);
        });
        throwNoProviderError();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexHtmlComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.13", type: KatexHtmlComponent, isStandalone: true, selector: "ng-katex-html", inputs: { html: { classPropertyName: "html", publicName: "html", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `<span [innerHTML]="allHtml()"></span>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-html',
                    template: `<span [innerHTML]="allHtml()"></span>`,
                    standalone: true,
                }]
        }], ctorParameters: () => [] });

class KatexModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, imports: [CommonModule,
            KatexDirective,
            KatexComponent,
            KatexParagraphComponent,
            KatexHtmlComponent], exports: [KatexDirective,
            KatexComponent,
            KatexParagraphComponent,
            KatexHtmlComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, providers: [
            KatexService,
        ], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        KatexDirective,
                        KatexComponent,
                        KatexParagraphComponent,
                        KatexHtmlComponent,
                    ],
                    providers: [
                        KatexService,
                    ],
                    exports: [
                        KatexDirective,
                        KatexComponent,
                        KatexParagraphComponent,
                        KatexHtmlComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of ng-katex
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KatexComponent, KatexDirective, KatexHtmlComponent, KatexModule, KatexParagraphComponent, KatexService };
//# sourceMappingURL=ng-katex-2.mjs.map
