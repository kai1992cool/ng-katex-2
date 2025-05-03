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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtcGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBb0J0RCxNQUFNLE9BQU8sdUJBQXVCO0lBbEJwQztRQW9CRSxhQUFRLEdBQWMsRUFBRSxDQUFDO0tBWTFCO0lBUkMsSUFBYSxTQUFTLENBQUMsU0FBaUI7UUFFdEMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzt3SUFaVSx1QkFBdUI7NEhBQXZCLHVCQUF1QixrSEFoQnhCOzs7Ozs7Ozs7OztHQVdULDREQUVTLElBQUksNkZBQUUsS0FBSyxtSEFBRSxjQUFjOzRGQUcxQix1QkFBdUI7a0JBbEJuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUM7b0JBQ3RDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFPYyxTQUFTO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGV4dHJhY3RNYXRoLCBTZWdtZW50IH0gZnJvbSAnZXh0cmFjdC1tYXRoJztcbmltcG9ydCB7IEthdGV4Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1rYXRleC1wYXJhZ3JhcGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzZWdtZW50c1wiPlxuICAgICAgICA8bmcta2F0ZXhcbiAgICAgICAgICAqbmdJZj1cInNlZ21lbnQubWF0aCBlbHNlIHRleHRcIlxuICAgICAgICAgIFtlcXVhdGlvbl09XCJzZWdtZW50LnJhd1wiXG4gICAgICAgICAgW29wdGlvbnNdPVwieyBkaXNwbGF5TW9kZTogc2VnbWVudC50eXBlID09PSAnZGlzcGxheScgfVwiPlxuICAgICAgICA8L25nLWthdGV4PlxuICAgICAgICA8bmctdGVtcGxhdGUgI3RleHQ+e3sgc2VnbWVudC52YWx1ZSB9fTwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdGb3IsIEthdGV4Q29tcG9uZW50XSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgS2F0ZXhQYXJhZ3JhcGhDb21wb25lbnQge1xuXG4gIHNlZ21lbnRzOiBTZWdtZW50W10gPSBbXTtcblxuICBwcml2YXRlIF9wYXJhZ3JhcGghOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHBhcmFncmFwaChwYXJhZ3JhcGg6IHN0cmluZykge1xuXG4gICAgaWYgKHBhcmFncmFwaCAhPT0gdGhpcy5fcGFyYWdyYXBoKSB7XG4gICAgICB0aGlzLl9wYXJhZ3JhcGggPSBwYXJhZ3JhcGg7XG4gICAgICB0aGlzLnNlZ21lbnRzID0gZXh0cmFjdE1hdGgodGhpcy5fcGFyYWdyYXBoKTtcbiAgICB9XG4gIH1cblxufVxuIl19