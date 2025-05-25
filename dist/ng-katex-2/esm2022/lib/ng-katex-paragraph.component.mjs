import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { extractMath } from 'extract-math';
import { KatexComponent } from './ng-katex.component';
import { throwNoProviderError } from './utils';
import * as i0 from "@angular/core";
export class KatexParagraphComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtcGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDOztBQXNCL0MsTUFBTSxPQUFPLHVCQUF1QjtJQVNsQztRQVJBLGNBQVMsR0FBd0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELGFBQVEsR0FBc0IsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFHRCxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7a0lBWFUsdUJBQXVCO3NIQUF2Qix1QkFBdUIsNk5BbEJ4Qjs7Ozs7Ozs7Ozs7OztLQWFQLDREQUVPLGNBQWM7OzRGQUdiLHVCQUF1QjtrQkFwQm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7b0JBQ0gsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGNvbXB1dGVkLCBpbnB1dCwgSW5wdXRTaWduYWwsIFNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBleHRyYWN0TWF0aCwgU2VnbWVudCB9IGZyb20gJ2V4dHJhY3QtbWF0aCc7XHJcbmltcG9ydCB7IEthdGV4Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0aHJvd05vUHJvdmlkZXJFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1rYXRleC1wYXJhZ3JhcGgnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgQGZvciAoc2VnbWVudCBvZiBzZWdtZW50cygpOyB0cmFjayBzZWdtZW50KSB7XHJcbiAgICAgICAgQGlmIChzZWdtZW50Lm1hdGgpIHtcclxuICAgICAgICAgIDxuZy1rYXRleFxyXG4gICAgICAgICAgICBbZXF1YXRpb25dPVwic2VnbWVudC5yYXdcIlxyXG4gICAgICAgICAgICBbb3B0aW9uc109XCJ7IGRpc3BsYXlNb2RlOiBzZWdtZW50LnR5cGUgPT09ICdkaXNwbGF5JyB9XCI+XHJcbiAgICAgICAgICA8L25nLWthdGV4PlxyXG4gICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAge3sgc2VnbWVudC52YWx1ZSB9fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgPC9wPlxyXG4gICAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBpbXBvcnRzOiBbS2F0ZXhDb21wb25lbnRdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleFBhcmFncmFwaENvbXBvbmVudCB7XHJcbiAgcGFyYWdyYXBoOiBJbnB1dFNpZ25hbDxzdHJpbmc+ID0gaW5wdXQucmVxdWlyZWQoKTtcclxuICBzZWdtZW50czogU2lnbmFsPFNlZ21lbnRbXT4gPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgICBsZXQgc2VnbWVudHMgPSBbXTtcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKCk7XHJcbiAgICBzZWdtZW50cyA9IGV4dHJhY3RNYXRoKHBhcmFncmFwaCk7XHJcbiAgICByZXR1cm4gc2VnbWVudHM7XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aHJvd05vUHJvdmlkZXJFcnJvcigpO1xyXG4gIH1cclxufVxyXG4iXX0=