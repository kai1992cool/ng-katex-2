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
}
/** @nocollapse */ KatexDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexDirective, deps: [{ token: i0.ElementRef }, { token: i1.KatexService }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ KatexDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: KatexDirective, isStandalone: true, selector: "[katex]", inputs: { equation: ["katex", "equation"], options: ["katex-options", "options"] }, outputs: { onError: "onError" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[katex]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.KatexService }]; }, propDecorators: { equation: [{
                type: Input,
                args: ['katex']
            }], options: [{
                type: Input,
                args: ['katex-options']
            }], onError: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkIsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsRUFBYyxFQUN4QixZQUEwQjtRQURoQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSDFCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBR0osQ0FBQztJQUV6QyxXQUFXO1FBQ1QsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7K0hBaEJVLGNBQWM7bUhBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7NEhBR2lCLFFBQVE7c0JBQXZCLEtBQUs7dUJBQUMsT0FBTztnQkFDVSxPQUFPO3NCQUE5QixLQUFLO3VCQUFDLGVBQWU7Z0JBRVosT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEthdGV4U2VydmljZSB9IGZyb20gJy4vbmcta2F0ZXguc2VydmljZSc7XG5pbXBvcnQgeyBLYXRleE9wdGlvbnMgfSBmcm9tICdrYXRleCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1trYXRleF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBLYXRleERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdrYXRleCcpIGVxdWF0aW9uITogc3RyaW5nO1xuICBASW5wdXQoJ2thdGV4LW9wdGlvbnMnKSBvcHRpb25zITogS2F0ZXhPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBvbkVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGthdGV4U2VydmljZTogS2F0ZXhTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5rYXRleFNlcnZpY2UucmVuZGVyKHRoaXMuZXF1YXRpb24sIHRoaXMuZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vbkVycm9yLmVtaXQoZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==