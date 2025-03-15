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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexHtmlComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.KatexService }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: KatexHtmlComponent, isStandalone: true, selector: "ng-katex-html", inputs: { html: "html" }, ngImport: i0, template: `<span [innerHTML]="allHtml"></span>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: KatexHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-html',
                    template: `<span [innerHTML]="allHtml"></span>`,
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }, { type: i2.KatexService }], propDecorators: { html: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1rYXRleC0yL3NyYy9saWIvbmcta2F0ZXgtaHRtbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQzs7OztBQVNwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW9CLFlBQTBCLEVBQVUsWUFBMEI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU0xRSxjQUFTLEdBQWMsRUFBRSxDQUFDO0lBTm9ELENBQUM7SUFRdkYsSUFBYSxJQUFJLENBQUMsSUFBWTtRQUU1QixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU8sYUFBYTtRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM1RixDQUFDO2lCQUNJLENBQUM7Z0JBQ0osT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztrSUExQ1Usa0JBQWtCO3NIQUFsQixrQkFBa0IsbUdBSG5CLHFDQUFxQzs7NEZBR3BDLGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzRHQVVjLElBQUk7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGV4dHJhY3RNYXRoLCBTZWdtZW50IH0gZnJvbSAnZXh0cmFjdC1tYXRoJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBLYXRleFNlcnZpY2UgfSBmcm9tICcuL25nLWthdGV4LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1rYXRleC1odG1sJyxcclxuICB0ZW1wbGF0ZTogYDxzcGFuIFtpbm5lckhUTUxdPVwiYWxsSHRtbFwiPjwvc3Bhbj5gLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleEh0bWxDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUga2F0ZXhTZXJ2aWNlOiBLYXRleFNlcnZpY2UpIHsgfVxyXG5cclxuICBhbGxIdG1sITogU2FmZUh0bWw7XHJcblxyXG4gIF9odG1sITogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9zZWdtZW50czogU2VnbWVudFtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIHNldCBodG1sKGh0bWw6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChodG1sICE9PSB0aGlzLl9odG1sKSB7XHJcbiAgICAgIHRoaXMuX2h0bWwgPSBodG1sO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFsbEh0bWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQWxsSHRtbCgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2h0bWwpIHtcclxuICAgICAgdGhpcy5hbGxIdG1sID0gJyc7XHJcbiAgICAgIHRoaXMuX3NlZ21lbnRzID0gW107XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZWdtZW50cyA9IGV4dHJhY3RNYXRoKHRoaXMuX2h0bWwpO1xyXG5cclxuICAgIGNvbnN0IGFsbEh0bWwgPSB0aGlzLl9zZWdtZW50cy5tYXAoKHNlZykgPT4ge1xyXG4gICAgICBpZiAoc2VnLm1hdGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rYXRleFNlcnZpY2UucmVuZGVyVG9TdHJpbmcoc2VnLnJhdywgeyBkaXNwbGF5TW9kZTogc2VnLnR5cGUgPT09ICdkaXNwbGF5JyB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc2VnLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KS5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiB0b3RhbCArPSBjdXJyZW50O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFsbEh0bWwgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChhbGxIdG1sKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWdtZW50cygpOiBTZWdtZW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlZ21lbnRzO1xyXG4gIH1cclxufVxyXG4iXX0=