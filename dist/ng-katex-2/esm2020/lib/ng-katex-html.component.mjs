import { Component, Input } from '@angular/core';
import { extractMath } from 'extract-math';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./ng-katex.service";
export class KatexHtmlComponent {
    constructor(domSanitizer, katexService) {
        this.domSanitizer = domSanitizer;
        this.katexService = katexService;
        this._segments = [];
    }
    set html(html) {
        if (html !== this._html) {
            this._html = html;
            this.updateAllHtml();
        }
    }
    updateAllHtml() {
        if (!this._html) {
            this.allHtml = '';
            this._segments = [];
            return;
        }
        this._segments = extractMath(this._html);
        const allHtml = this._segments.map((seg) => {
            if (seg.math) {
                return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
            }
            else {
                return seg.value;
            }
        }).reduce((total, current) => {
            return total += current;
        });
        this.allHtml = this.domSanitizer.bypassSecurityTrustHtml(allHtml);
    }
    get segments() {
        return this._segments;
    }
}
/** @nocollapse */ KatexHtmlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexHtmlComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.KatexService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ KatexHtmlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: KatexHtmlComponent, isStandalone: true, selector: "ng-katex-html", inputs: { html: "html" }, ngImport: i0, template: `<span [innerHTML]="allHtml"></span>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-html',
                    template: `<span [innerHTML]="allHtml"></span>`,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.KatexService }]; }, propDecorators: { html: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1rYXRleC0yL3NyYy9saWIvbmcta2F0ZXgtaHRtbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQzs7OztBQVNwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW9CLFlBQTBCLEVBQVUsWUFBMEI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU0xRSxjQUFTLEdBQWMsRUFBRSxDQUFDO0lBTm9ELENBQUM7SUFRdkYsSUFBYSxJQUFJLENBQUMsSUFBWTtRQUU1QixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxhQUFhO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDM0Y7aUJBQ0k7Z0JBQ0gsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzNCLE9BQU8sS0FBSyxJQUFJLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O21JQTFDVSxrQkFBa0I7dUhBQWxCLGtCQUFrQixtR0FIbkIscUNBQXFDOzRGQUdwQyxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4SEFVYyxJQUFJO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBleHRyYWN0TWF0aCwgU2VnbWVudCB9IGZyb20gJ2V4dHJhY3QtbWF0aCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgS2F0ZXhTZXJ2aWNlIH0gZnJvbSAnLi9uZy1rYXRleC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcta2F0ZXgtaHRtbCcsXHJcbiAgdGVtcGxhdGU6IGA8c3BhbiBbaW5uZXJIVE1MXT1cImFsbEh0bWxcIj48L3NwYW4+YCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2F0ZXhIdG1sQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGthdGV4U2VydmljZTogS2F0ZXhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYWxsSHRtbCE6IFNhZmVIdG1sO1xyXG5cclxuICBfaHRtbCE6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfc2VnbWVudHM6IFNlZ21lbnRbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBzZXQgaHRtbChodG1sOiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAoaHRtbCAhPT0gdGhpcy5faHRtbCkge1xyXG4gICAgICB0aGlzLl9odG1sID0gaHRtbDtcclxuICAgICAgdGhpcy51cGRhdGVBbGxIdG1sKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUFsbEh0bWwoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9odG1sKSB7XHJcbiAgICAgIHRoaXMuYWxsSHRtbCA9ICcnO1xyXG4gICAgICB0aGlzLl9zZWdtZW50cyA9IFtdO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2VnbWVudHMgPSBleHRyYWN0TWF0aCh0aGlzLl9odG1sKTtcclxuXHJcbiAgICBjb25zdCBhbGxIdG1sID0gdGhpcy5fc2VnbWVudHMubWFwKChzZWcpID0+IHtcclxuICAgICAgaWYgKHNlZy5tYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2F0ZXhTZXJ2aWNlLnJlbmRlclRvU3RyaW5nKHNlZy5yYXcsIHsgZGlzcGxheU1vZGU6IHNlZy50eXBlID09PSAnZGlzcGxheScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSkucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gdG90YWwgKz0gY3VycmVudDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hbGxIdG1sID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYWxsSHRtbCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VnbWVudHMoKTogU2VnbWVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWdtZW50cztcclxuICB9XHJcbn1cclxuIl19