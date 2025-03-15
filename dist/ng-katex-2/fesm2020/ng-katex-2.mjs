import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { render, renderToString } from 'katex';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { extractMath } from 'extract-math';
import * as i1 from '@angular/platform-browser';

class KatexService {
    render(equation, element, options) {
        return render(equation, element.nativeElement, options);
    }
    renderToString(equation, options) {
        return renderToString(equation, options);
    }
}
/** @nocollapse */ KatexService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ KatexService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService, decorators: [{
            type: Injectable
        }] });

class KatexDirective {
    constructor(el, katexService) {
        this.el = el;
        this.katexService = katexService;
        this.onError = new EventEmitter();
    }
    ngOnChanges() {
        try {
            this.katexService.render(this.equation, this.el, this.options);
        }
        catch (e) {
            this.onError.emit(e);
        }
    }
}
/** @nocollapse */ KatexDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexDirective, deps: [{ token: i0.ElementRef }, { token: KatexService }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ KatexDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: KatexDirective, isStandalone: true, selector: "[katex]", inputs: { equation: ["katex", "equation"], options: ["katex-options", "options"] }, outputs: { onError: "onError" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[katex]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: KatexService }]; }, propDecorators: { equation: [{
                type: Input,
                args: ['katex']
            }], options: [{
                type: Input,
                args: ['katex-options']
            }], onError: [{
                type: Output
            }] } });

class KatexComponent {
    constructor() {
        this.onError = new EventEmitter();
    }
    hasError(error) {
        this.onError.emit(error);
    }
}
/** @nocollapse */ KatexComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ KatexComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: KatexComponent, isStandalone: true, selector: "ng-katex", inputs: { equation: "equation", options: "options" }, outputs: { onError: "onError" }, ngImport: i0, template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: KatexDirective, selector: "[katex]", inputs: ["katex", "katex-options"], outputs: ["onError"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex',
                    template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `,
                    standalone: true,
                    imports: [KatexDirective],
                }]
        }], propDecorators: { equation: [{
                type: Input
            }], options: [{
                type: Input
            }], onError: [{
                type: Output
            }] } });

class KatexParagraphComponent {
    constructor() {
        this.segments = [];
    }
    set paragraph(paragraph) {
        if (paragraph !== this._paragraph) {
            this._paragraph = paragraph;
            this.segments = extractMath(this._paragraph);
        }
    }
}
/** @nocollapse */ KatexParagraphComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexParagraphComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ KatexParagraphComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: KatexParagraphComponent, isStandalone: true, selector: "ng-katex-paragraph", inputs: { paragraph: "paragraph" }, ngImport: i0, template: `
    <p>
      <ng-container *ngFor="let segment of segments">
        <ng-katex
          *ngIf="segment.math else text"
          [equation]="segment.raw"
          [options]="{ displayMode: segment.type === 'display' }">
        </ng-katex>
        <ng-template #text>{{ segment.value }}</ng-template>
      </ng-container>
    </p>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: KatexComponent, selector: "ng-katex", inputs: ["equation", "options"], outputs: ["onError"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexParagraphComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-paragraph',
                    template: `
    <p>
      <ng-container *ngFor="let segment of segments">
        <ng-katex
          *ngIf="segment.math else text"
          [equation]="segment.raw"
          [options]="{ displayMode: segment.type === 'display' }">
        </ng-katex>
        <ng-template #text>{{ segment.value }}</ng-template>
      </ng-container>
    </p>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, NgFor, KatexComponent],
                    standalone: true,
                }]
        }], propDecorators: { paragraph: [{
                type: Input
            }] } });

class KatexHtmlComponent {
    constructor(domSanitizer, katexService) {
        this.domSanitizer = domSanitizer;
        this.katexService = katexService;
        this._segments = [];
    }
    set html(html) {
        if (html !== this._html) {
            this._html = html;
            this.updateAllHtml();
        }
    }
    updateAllHtml() {
        if (!this._html) {
            this.allHtml = '';
            this._segments = [];
            return;
        }
        this._segments = extractMath(this._html);
        const allHtml = this._segments.map((seg) => {
            if (seg.math) {
                return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
            }
            else {
                return seg.value;
            }
        }).reduce((total, current) => {
            return total += current;
        });
        this.allHtml = this.domSanitizer.bypassSecurityTrustHtml(allHtml);
    }
    get segments() {
        return this._segments;
    }
}
/** @nocollapse */ KatexHtmlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexHtmlComponent, deps: [{ token: i1.DomSanitizer }, { token: KatexService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ KatexHtmlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: KatexHtmlComponent, isStandalone: true, selector: "ng-katex-html", inputs: { html: "html" }, ngImport: i0, template: `<span [innerHTML]="allHtml"></span>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-html',
                    template: `<span [innerHTML]="allHtml"></span>`,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: KatexService }]; }, propDecorators: { html: [{
                type: Input
            }] } });

class KatexModule {
}
/** @nocollapse */ KatexModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ KatexModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, imports: [CommonModule,
        KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent], exports: [KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
/** @nocollapse */ KatexModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, providers: [
        KatexService,
    ], imports: [CommonModule,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, decorators: [{
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
                    declarations: [],
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
