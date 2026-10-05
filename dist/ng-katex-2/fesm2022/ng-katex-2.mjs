import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Directive, ElementRef, Injectable, NgModule, computed, effect, inject, input, output } from "@angular/core";
import { render, renderToString } from "katex";
import { extractMath } from "extract-math";
import { DomSanitizer } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
var KatexService = class KatexService {
	render(equation, element, options) {
		return render(equation, element.nativeElement, options);
	}
	renderToString(equation, options) {
		return renderToString(equation, options);
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexService,
			deps: [],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexService
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexService,
	decorators: [{ type: Injectable }]
});
const throwNoProviderError = () => {
	if (!inject(KatexService, { optional: true })) throw new Error(`
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
};
var KatexDirective = class KatexDirective {
	constructor() {
		this.el = inject(ElementRef);
		this.katexService = inject(KatexService);
		this.equation = input.required({
			...ngDevMode ? { debugName: "equation" } : /* istanbul ignore next */ {},
			alias: "katex"
		});
		this.options = input({}, {
			...ngDevMode ? { debugName: "options" } : /* istanbul ignore next */ {},
			alias: "katex-options"
		});
		this.onError = output();
		throwNoProviderError();
		effect(() => {
			try {
				this.katexService.render(this.equation(), this.el, this.options());
			} catch (e) {
				this.onError.emit(e);
			}
		});
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexDirective,
			deps: [],
			target: i0.ɵɵFactoryTarget.Directive
		});
	}
	static {
		this.ɵdir = i0.ɵɵngDeclareDirective({
			minVersion: "17.1.0",
			version: "22.2.1",
			type: KatexDirective,
			isStandalone: true,
			selector: "[katex]",
			inputs: {
				equation: {
					classPropertyName: "equation",
					publicName: "katex",
					isSignal: true,
					isRequired: true,
					transformFunction: null
				},
				options: {
					classPropertyName: "options",
					publicName: "katex-options",
					isSignal: true,
					isRequired: false,
					transformFunction: null
				}
			},
			outputs: { onError: "onError" },
			ngImport: i0
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexDirective,
	decorators: [{
		type: Directive,
		args: [{
			selector: "[katex]",
			standalone: true
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		equation: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "katex",
				required: true
			}]
		}],
		options: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "katex-options",
				required: false
			}]
		}],
		onError: [{
			type: i0.Output,
			args: ["onError"]
		}]
	}
});
var KatexComponent = class KatexComponent {
	hasError(error) {
		this.onError.emit(error);
	}
	constructor() {
		this.equation = input.required(...ngDevMode ? [{ debugName: "equation" }] : /* istanbul ignore next */ []);
		this.options = input({}, ...ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []);
		this.onError = output();
		throwNoProviderError();
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexComponent,
			deps: [],
			target: i0.ɵɵFactoryTarget.Component
		});
	}
	static {
		this.ɵcmp = i0.ɵɵngDeclareComponent({
			minVersion: "17.1.0",
			version: "22.2.1",
			type: KatexComponent,
			isStandalone: true,
			selector: "ng-katex",
			inputs: {
				equation: {
					classPropertyName: "equation",
					publicName: "equation",
					isSignal: true,
					isRequired: true,
					transformFunction: null
				},
				options: {
					classPropertyName: "options",
					publicName: "options",
					isSignal: true,
					isRequired: false,
					transformFunction: null
				}
			},
			outputs: { onError: "onError" },
			ngImport: i0,
			template: `
    <span [katex]="equation()"
          [katex-options]="options()"
          (someEvent)="hasError($event)">
    </span>
  `,
			isInline: true,
			dependencies: [{
				kind: "directive",
				type: KatexDirective,
				selector: "[katex]",
				inputs: ["katex", "katex-options"],
				outputs: ["onError"]
			}]
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "ng-katex",
			template: `
    <span [katex]="equation()"
          [katex-options]="options()"
          (someEvent)="hasError($event)">
    </span>
  `,
			standalone: true,
			imports: [KatexDirective]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		equation: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "equation",
				required: true
			}]
		}],
		options: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "options",
				required: false
			}]
		}],
		onError: [{
			type: i0.Output,
			args: ["onError"]
		}]
	}
});
var KatexHtmlComponent = class KatexHtmlComponent {
	constructor() {
		this.domSanitizer = inject(DomSanitizer);
		this.katexService = inject(KatexService);
		this.html = input("", ...ngDevMode ? [{ debugName: "html" }] : /* istanbul ignore next */ []);
		this.allHtml = computed(() => {
			const html = this.html();
			let allHtmlValue = "";
			let _segments = [];
			if (!html) {
				allHtmlValue = "";
				_segments = [];
				return allHtmlValue;
			}
			_segments = extractMath(html);
			const allHtml = _segments.map((seg) => {
				if (seg.math) return this.katexService.renderToString(seg.raw, { displayMode: seg.type === "display" });
				else return seg.value;
			}).reduce((total, current) => {
				return total += current;
			});
			return this.domSanitizer.bypassSecurityTrustHtml(allHtml);
		}, ...ngDevMode ? [{ debugName: "allHtml" }] : /* istanbul ignore next */ []);
		throwNoProviderError();
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexHtmlComponent,
			deps: [],
			target: i0.ɵɵFactoryTarget.Component
		});
	}
	static {
		this.ɵcmp = i0.ɵɵngDeclareComponent({
			minVersion: "17.1.0",
			version: "22.2.1",
			type: KatexHtmlComponent,
			isStandalone: true,
			selector: "ng-katex-html",
			inputs: { html: {
				classPropertyName: "html",
				publicName: "html",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			} },
			ngImport: i0,
			template: `<span [innerHTML]="allHtml()"></span>`,
			isInline: true
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexHtmlComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "ng-katex-html",
			template: `<span [innerHTML]="allHtml()"></span>`,
			standalone: true
		}]
	}],
	ctorParameters: () => [],
	propDecorators: { html: [{
		type: i0.Input,
		args: [{
			isSignal: true,
			alias: "html",
			required: false
		}]
	}] }
});
var KatexParagraphComponent = class KatexParagraphComponent {
	constructor() {
		this.paragraph = input.required(...ngDevMode ? [{ debugName: "paragraph" }] : /* istanbul ignore next */ []);
		this.segments = computed(() => {
			let segments = [];
			const paragraph = this.paragraph();
			segments = extractMath(paragraph);
			return segments;
		}, ...ngDevMode ? [{ debugName: "segments" }] : /* istanbul ignore next */ []);
		throwNoProviderError();
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexParagraphComponent,
			deps: [],
			target: i0.ɵɵFactoryTarget.Component
		});
	}
	static {
		this.ɵcmp = i0.ɵɵngDeclareComponent({
			minVersion: "17.0.0",
			version: "22.2.1",
			type: KatexParagraphComponent,
			isStandalone: true,
			selector: "ng-katex-paragraph",
			inputs: { paragraph: {
				classPropertyName: "paragraph",
				publicName: "paragraph",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			} },
			ngImport: i0,
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
			isInline: true,
			dependencies: [{
				kind: "component",
				type: KatexComponent,
				selector: "ng-katex",
				inputs: ["equation", "options"],
				outputs: ["onError"]
			}],
			changeDetection: i0.ChangeDetectionStrategy.OnPush
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexParagraphComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "ng-katex-paragraph",
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
			standalone: true
		}]
	}],
	ctorParameters: () => [],
	propDecorators: { paragraph: [{
		type: i0.Input,
		args: [{
			isSignal: true,
			alias: "paragraph",
			required: true
		}]
	}] }
});
var KatexModule = class KatexModule {
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexModule,
			deps: [],
			target: i0.ɵɵFactoryTarget.NgModule
		});
	}
	static {
		this.ɵmod = i0.ɵɵngDeclareNgModule({
			minVersion: "14.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexModule,
			imports: [
				CommonModule,
				KatexDirective,
				KatexComponent,
				KatexParagraphComponent,
				KatexHtmlComponent
			],
			exports: [
				KatexDirective,
				KatexComponent,
				KatexParagraphComponent,
				KatexHtmlComponent
			]
		});
	}
	static {
		this.ɵinj = i0.ɵɵngDeclareInjector({
			minVersion: "12.0.0",
			version: "22.2.1",
			ngImport: i0,
			type: KatexModule,
			providers: [KatexService],
			imports: [CommonModule]
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: KatexModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				KatexDirective,
				KatexComponent,
				KatexParagraphComponent,
				KatexHtmlComponent
			],
			providers: [KatexService],
			declarations: [],
			exports: [
				KatexDirective,
				KatexComponent,
				KatexParagraphComponent,
				KatexHtmlComponent
			]
		}]
	}]
});
export { KatexComponent, KatexDirective, KatexHtmlComponent, KatexModule, KatexParagraphComponent, KatexService };

//# sourceMappingURL=ng-katex-2.mjs.map