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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGNBQWM7SUFYM0I7UUFlWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUs3QztJQUhDLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7OytIQVJVLGNBQWM7bUhBQWQsY0FBYywySkFUZjs7Ozs7R0FLVCw0REFFUyxjQUFjOzRGQUViLGNBQWM7a0JBWDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQjs4QkFHVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2F0ZXhPcHRpb25zIH0gZnJvbSAna2F0ZXgnO1xuaW1wb3J0IHsgS2F0ZXhEaXJlY3RpdmUgfSBmcm9tICcuL25nLWthdGV4LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWthdGV4JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBba2F0ZXhdPVwiZXF1YXRpb25cIlxuICAgICAgICAgIFtrYXRleC1vcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICAgIChzb21lRXZlbnQpPVwiaGFzRXJyb3IoJGV2ZW50KVwiPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0thdGV4RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgS2F0ZXhDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGVxdWF0aW9uITogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zITogS2F0ZXhPcHRpb25zO1xuICBAT3V0cHV0KCkgb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGhhc0Vycm9yKGVycm9yOiBhbnkpIHtcbiAgICB0aGlzLm9uRXJyb3IuZW1pdChlcnJvcik7XG4gIH1cbn1cbiJdfQ==