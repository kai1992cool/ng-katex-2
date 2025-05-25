import { Component, input, output, } from '@angular/core';
import { KatexDirective } from './ng-katex.directive';
import { throwNoProviderError } from './utils';
import * as i0 from "@angular/core";
export class KatexComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFhL0MsTUFBTSxPQUFPLGNBQWM7SUFLekIsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEO1FBUkEsYUFBUSxHQUF3QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakQsWUFBTyxHQUE4QixLQUFLLENBQWUsRUFBRSxDQUFDLENBQUM7UUFDN0QsWUFBTyxHQUEwQixNQUFNLEVBQU8sQ0FBQztRQU83QyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7a0lBWFUsY0FBYztzSEFBZCxjQUFjLCtXQVRmOzs7OztHQUtULDREQUVTLGNBQWM7OzRGQUViLGNBQWM7a0JBWDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIGlucHV0LFxyXG4gIElucHV0U2lnbmFsLFxyXG4gIG91dHB1dCxcclxuICBPdXRwdXRFbWl0dGVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLYXRleE9wdGlvbnMgfSBmcm9tICdrYXRleCc7XHJcbmltcG9ydCB7IEthdGV4RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1rYXRleC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyB0aHJvd05vUHJvdmlkZXJFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1rYXRleCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIFtrYXRleF09XCJlcXVhdGlvbigpXCJcclxuICAgICAgICAgIFtrYXRleC1vcHRpb25zXT1cIm9wdGlvbnMoKVwiXHJcbiAgICAgICAgICAoc29tZUV2ZW50KT1cImhhc0Vycm9yKCRldmVudClcIj5cclxuICAgIDwvc3Bhbj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0thdGV4RGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEthdGV4Q29tcG9uZW50IHtcclxuICBlcXVhdGlvbjogSW5wdXRTaWduYWw8c3RyaW5nPiA9IGlucHV0LnJlcXVpcmVkKCk7XHJcbiAgb3B0aW9uczogSW5wdXRTaWduYWw8S2F0ZXhPcHRpb25zPiA9IGlucHV0PEthdGV4T3B0aW9ucz4oe30pO1xyXG4gIG9uRXJyb3I6IE91dHB1dEVtaXR0ZXJSZWY8YW55PiA9IG91dHB1dDxhbnk+KCk7XHJcblxyXG4gIGhhc0Vycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIHRoaXMub25FcnJvci5lbWl0KGVycm9yKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aHJvd05vUHJvdmlkZXJFcnJvcigpO1xyXG4gIH1cclxufVxyXG4iXX0=