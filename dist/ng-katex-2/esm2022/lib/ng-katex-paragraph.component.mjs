import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { extractMath } from 'extract-math';
import { KatexComponent } from './ng-katex.component';
import * as i0 from "@angular/core";
export class KatexParagraphComponent {
    constructor() {
        this.segments = [];
    }
    set paragraph(paragraph) {
        if (paragraph !== this._paragraph) {
            this._paragraph = paragraph;
            this.segments = extractMath(this._paragraph);
        }
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KatexParagraphComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: KatexParagraphComponent, isStandalone: true, selector: "ng-katex-paragraph", inputs: { paragraph: "paragraph" }, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: KatexComponent, selector: "ng-katex", inputs: ["equation", "options"], outputs: ["onError"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KatexParagraphComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtcGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBb0J0RCxNQUFNLE9BQU8sdUJBQXVCO0lBbEJwQztRQW9CRSxhQUFRLEdBQWMsRUFBRSxDQUFDO0tBWTFCO0lBUkMsSUFBYSxTQUFTLENBQUMsU0FBaUI7UUFFdEMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO2tJQVpVLHVCQUF1QjtzSEFBdkIsdUJBQXVCLGtIQWhCeEI7Ozs7Ozs7Ozs7O0dBV1QsNERBRVMsSUFBSSw2RkFBRSxLQUFLLG1IQUFFLGNBQWM7OzRGQUcxQix1QkFBdUI7a0JBbEJuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUM7b0JBQ3RDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFPYyxTQUFTO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBleHRyYWN0TWF0aCwgU2VnbWVudCB9IGZyb20gJ2V4dHJhY3QtbWF0aCc7XHJcbmltcG9ydCB7IEthdGV4Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1rYXRleC1wYXJhZ3JhcGgnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzZWdtZW50c1wiPlxyXG4gICAgICAgIDxuZy1rYXRleFxyXG4gICAgICAgICAgKm5nSWY9XCJzZWdtZW50Lm1hdGggZWxzZSB0ZXh0XCJcclxuICAgICAgICAgIFtlcXVhdGlvbl09XCJzZWdtZW50LnJhd1wiXHJcbiAgICAgICAgICBbb3B0aW9uc109XCJ7IGRpc3BsYXlNb2RlOiBzZWdtZW50LnR5cGUgPT09ICdkaXNwbGF5JyB9XCI+XHJcbiAgICAgICAgPC9uZy1rYXRleD5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3RleHQ+e3sgc2VnbWVudC52YWx1ZSB9fTwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBLYXRleENvbXBvbmVudF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEthdGV4UGFyYWdyYXBoQ29tcG9uZW50IHtcclxuXHJcbiAgc2VnbWVudHM6IFNlZ21lbnRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9wYXJhZ3JhcGghOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBwYXJhZ3JhcGgocGFyYWdyYXBoOiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAocGFyYWdyYXBoICE9PSB0aGlzLl9wYXJhZ3JhcGgpIHtcclxuICAgICAgdGhpcy5fcGFyYWdyYXBoID0gcGFyYWdyYXBoO1xyXG4gICAgICB0aGlzLnNlZ21lbnRzID0gZXh0cmFjdE1hdGgodGhpcy5fcGFyYWdyYXBoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==