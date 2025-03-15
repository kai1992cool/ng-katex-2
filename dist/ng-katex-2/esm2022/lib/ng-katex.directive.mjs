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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KatexDirective, deps: [{ token: i0.ElementRef }, { token: i1.KatexService }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: KatexDirective, isStandalone: true, selector: "[katex]", inputs: { equation: ["katex", "equation"], options: ["katex-options", "options"] }, outputs: { onError: "onError" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KatexDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkIsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsRUFBYyxFQUN4QixZQUEwQjtRQURoQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSDFCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBR0osQ0FBQztJQUV6QyxXQUFXO1FBQ1QsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztrSUFoQlUsY0FBYztzSEFBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7NEhBR2lCLFFBQVE7c0JBQXZCLEtBQUs7dUJBQUMsT0FBTztnQkFDVSxPQUFPO3NCQUE5QixLQUFLO3VCQUFDLGVBQWU7Z0JBRVosT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2F0ZXhTZXJ2aWNlIH0gZnJvbSAnLi9uZy1rYXRleC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2F0ZXhPcHRpb25zIH0gZnJvbSAna2F0ZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdba2F0ZXhdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2F0ZXhEaXJlY3RpdmUge1xyXG5cclxuICBASW5wdXQoJ2thdGV4JykgZXF1YXRpb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCdrYXRleC1vcHRpb25zJykgb3B0aW9ucyE6IEthdGV4T3B0aW9ucztcclxuXHJcbiAgQE91dHB1dCgpIG9uRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUga2F0ZXhTZXJ2aWNlOiBLYXRleFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMua2F0ZXhTZXJ2aWNlLnJlbmRlcih0aGlzLmVxdWF0aW9uLCB0aGlzLmVsLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLm9uRXJyb3IuZW1pdChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==