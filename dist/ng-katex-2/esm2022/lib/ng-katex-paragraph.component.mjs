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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexParagraphComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: KatexParagraphComponent, isStandalone: true, selector: "ng-katex-paragraph", inputs: { paragraph: "paragraph" }, ngImport: i0, template: `
    <p>
      @for (segment of segments; track segment) {
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexParagraphComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-paragraph',
                    template: `
    <p>
      @for (segment of segments; track segment) {
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
        }], propDecorators: { paragraph: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtcGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQXNCdEQsTUFBTSxPQUFPLHVCQUF1QjtJQXBCcEM7UUFzQkUsYUFBUSxHQUFjLEVBQUUsQ0FBQztLQVkxQjtJQVJDLElBQWEsU0FBUyxDQUFDLFNBQWlCO1FBRXRDLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7a0lBWlUsdUJBQXVCO3NIQUF2Qix1QkFBdUIsa0hBbEJ4Qjs7Ozs7Ozs7Ozs7OztLQWFQLDREQUVPLGNBQWM7OzRGQUdiLHVCQUF1QjtrQkFwQm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7b0JBQ0gsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU9jLFNBQVM7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZXh0cmFjdE1hdGgsIFNlZ21lbnQgfSBmcm9tICdleHRyYWN0LW1hdGgnO1xyXG5pbXBvcnQgeyBLYXRleENvbXBvbmVudCB9IGZyb20gJy4vbmcta2F0ZXguY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcta2F0ZXgtcGFyYWdyYXBoJyxcclxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgQGZvciAoc2VnbWVudCBvZiBzZWdtZW50czsgdHJhY2sgc2VnbWVudCkge1xuICAgICAgICBAaWYgKHNlZ21lbnQubWF0aCkge1xuICAgICAgICAgIDxuZy1rYXRleFxuICAgICAgICAgICAgW2VxdWF0aW9uXT1cInNlZ21lbnQucmF3XCJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cInsgZGlzcGxheU1vZGU6IHNlZ21lbnQudHlwZSA9PT0gJ2Rpc3BsYXknIH1cIj5cbiAgICAgICAgICA8L25nLWthdGV4PlxuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICB7eyBzZWdtZW50LnZhbHVlIH19XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3A+XG4gICAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBpbXBvcnRzOiBbS2F0ZXhDb21wb25lbnRdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleFBhcmFncmFwaENvbXBvbmVudCB7XHJcblxyXG4gIHNlZ21lbnRzOiBTZWdtZW50W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFyYWdyYXBoITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBzZXQgcGFyYWdyYXBoKHBhcmFncmFwaDogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKHBhcmFncmFwaCAhPT0gdGhpcy5fcGFyYWdyYXBoKSB7XHJcbiAgICAgIHRoaXMuX3BhcmFncmFwaCA9IHBhcmFncmFwaDtcclxuICAgICAgdGhpcy5zZWdtZW50cyA9IGV4dHJhY3RNYXRoKHRoaXMuX3BhcmFncmFwaCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=