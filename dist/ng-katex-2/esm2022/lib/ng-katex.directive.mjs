import { Directive, effect, ElementRef, inject, input, output, } from '@angular/core';
import { KatexService } from './ng-katex.service';
import { throwNoProviderError } from './utils';
import * as i0 from "@angular/core";
export class KatexDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFNL0MsTUFBTSxPQUFPLGNBQWM7SUFXekI7UUFWUSxPQUFFLEdBQWUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLGlCQUFZLEdBQWlCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxhQUFRLEdBQXdCLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDN0MsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7UUFDSCxZQUFPLEdBQThCLEtBQUssQ0FBZSxFQUFFLEVBQUU7WUFDM0QsS0FBSyxFQUFFLGVBQWU7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsWUFBTyxHQUEwQixNQUFNLEVBQU8sQ0FBQztRQUc3QyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDckUsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrSUFwQlUsY0FBYztzSEFBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBlZmZlY3QsXHJcbiAgRWxlbWVudFJlZixcclxuICBpbmplY3QsXHJcbiAgaW5wdXQsXHJcbiAgSW5wdXRTaWduYWwsXHJcbiAgb3V0cHV0LFxyXG4gIE91dHB1dEVtaXR0ZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEthdGV4U2VydmljZSB9IGZyb20gJy4vbmcta2F0ZXguc2VydmljZSc7XHJcbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJ2thdGV4JztcclxuaW1wb3J0IHsgdGhyb3dOb1Byb3ZpZGVyRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2thdGV4XScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEthdGV4RGlyZWN0aXZlIHtcclxuICBwcml2YXRlIGVsOiBFbGVtZW50UmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xyXG4gIHByaXZhdGUga2F0ZXhTZXJ2aWNlOiBLYXRleFNlcnZpY2UgPSBpbmplY3QoS2F0ZXhTZXJ2aWNlKTtcclxuICBlcXVhdGlvbjogSW5wdXRTaWduYWw8c3RyaW5nPiA9IGlucHV0LnJlcXVpcmVkKHtcclxuICAgIGFsaWFzOiAna2F0ZXgnLFxyXG4gIH0pO1xyXG4gIG9wdGlvbnM6IElucHV0U2lnbmFsPEthdGV4T3B0aW9ucz4gPSBpbnB1dDxLYXRleE9wdGlvbnM+KHt9LCB7XHJcbiAgICBhbGlhczogJ2thdGV4LW9wdGlvbnMnXHJcbiAgfSk7XHJcbiAgb25FcnJvcjogT3V0cHV0RW1pdHRlclJlZjxhbnk+ID0gb3V0cHV0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aHJvd05vUHJvdmlkZXJFcnJvcigpO1xyXG4gICAgZWZmZWN0KCgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmthdGV4U2VydmljZS5yZW5kZXIodGhpcy5lcXVhdGlvbigpLCB0aGlzLmVsLCB0aGlzLm9wdGlvbnMoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IuZW1pdChlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=