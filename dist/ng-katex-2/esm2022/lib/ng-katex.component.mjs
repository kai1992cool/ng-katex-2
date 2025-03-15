import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { KatexDirective } from './ng-katex.directive';
import * as i0 from "@angular/core";
export class KatexComponent {
    constructor() {
        this.onError = new EventEmitter();
    }
    hasError(error) {
        this.onError.emit(error);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: KatexComponent, isStandalone: true, selector: "ng-katex", inputs: { equation: "equation", options: "options" }, outputs: { onError: "onError" }, ngImport: i0, template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: KatexDirective, selector: "[katex]", inputs: ["katex", "katex-options"], outputs: ["onError"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGNBQWM7SUFYM0I7UUFlWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUs3QztJQUhDLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7a0lBUlUsY0FBYztzSEFBZCxjQUFjLDJKQVRmOzs7OztHQUtULDREQUVTLGNBQWM7OzRGQUViLGNBQWM7a0JBWDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQjs4QkFHVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2F0ZXhPcHRpb25zIH0gZnJvbSAna2F0ZXgnO1xyXG5pbXBvcnQgeyBLYXRleERpcmVjdGl2ZSB9IGZyb20gJy4vbmcta2F0ZXguZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcta2F0ZXgnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBba2F0ZXhdPVwiZXF1YXRpb25cIlxyXG4gICAgICAgICAgW2thdGV4LW9wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAoc29tZUV2ZW50KT1cImhhc0Vycm9yKCRldmVudClcIj5cclxuICAgIDwvc3Bhbj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0thdGV4RGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEthdGV4Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZXF1YXRpb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgb3B0aW9ucyE6IEthdGV4T3B0aW9ucztcclxuICBAT3V0cHV0KCkgb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBoYXNFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICB0aGlzLm9uRXJyb3IuZW1pdChlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==