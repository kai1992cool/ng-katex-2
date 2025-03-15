import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ng-katex.service";
export class KatexDirective {
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexDirective, deps: [{ token: i0.ElementRef }, { token: i1.KatexService }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: KatexDirective, isStandalone: true, selector: "[katex]", inputs: { equation: ["katex", "equation"], options: ["katex-options", "options"] }, outputs: { onError: "onError" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[katex]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.KatexService }], propDecorators: { equation: [{
                type: Input,
                args: ['katex']
            }], options: [{
                type: Input,
                args: ['katex-options']
            }], onError: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkIsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsRUFBYyxFQUN4QixZQUEwQjtRQURoQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSDFCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBR0osQ0FBQztJQUV6QyxXQUFXO1FBQ1QsSUFBSSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO2tJQWhCVSxjQUFjO3NIQUFkLGNBQWM7OzRGQUFkLGNBQWM7a0JBSjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjswR0FHaUIsUUFBUTtzQkFBdkIsS0FBSzt1QkFBQyxPQUFPO2dCQUNVLE9BQU87c0JBQTlCLEtBQUs7dUJBQUMsZUFBZTtnQkFFWixPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLYXRleFNlcnZpY2UgfSBmcm9tICcuL25nLWthdGV4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLYXRleE9wdGlvbnMgfSBmcm9tICdrYXRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1trYXRleF0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleERpcmVjdGl2ZSB7XHJcblxyXG4gIEBJbnB1dCgna2F0ZXgnKSBlcXVhdGlvbiE6IHN0cmluZztcclxuICBASW5wdXQoJ2thdGV4LW9wdGlvbnMnKSBvcHRpb25zITogS2F0ZXhPcHRpb25zO1xyXG5cclxuICBAT3V0cHV0KCkgb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBrYXRleFNlcnZpY2U6IEthdGV4U2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5rYXRleFNlcnZpY2UucmVuZGVyKHRoaXMuZXF1YXRpb24sIHRoaXMuZWwsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMub25FcnJvci5lbWl0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19