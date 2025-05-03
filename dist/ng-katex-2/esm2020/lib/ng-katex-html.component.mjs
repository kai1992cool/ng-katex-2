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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1rYXRleC0yL3NyYy9saWIvbmcta2F0ZXgtaHRtbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQzs7OztBQVNwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW9CLFlBQTBCLEVBQVUsWUFBMEI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU0xRSxjQUFTLEdBQWMsRUFBRSxDQUFDO0lBTm9ELENBQUM7SUFRdkYsSUFBYSxJQUFJLENBQUMsSUFBWTtRQUU1QixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxhQUFhO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDM0Y7aUJBQ0k7Z0JBQ0gsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzNCLE9BQU8sS0FBSyxJQUFJLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O21JQTFDVSxrQkFBa0I7dUhBQWxCLGtCQUFrQixtR0FIbkIscUNBQXFDOzRGQUdwQyxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4SEFVYyxJQUFJO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXh0cmFjdE1hdGgsIFNlZ21lbnQgfSBmcm9tICdleHRyYWN0LW1hdGgnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgS2F0ZXhTZXJ2aWNlIH0gZnJvbSAnLi9uZy1rYXRleC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcta2F0ZXgtaHRtbCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gW2lubmVySFRNTF09XCJhbGxIdG1sXCI+PC9zcGFuPmAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEthdGV4SHRtbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUga2F0ZXhTZXJ2aWNlOiBLYXRleFNlcnZpY2UpIHsgfVxuXG4gIGFsbEh0bWwhOiBTYWZlSHRtbDtcblxuICBfaHRtbCE6IHN0cmluZztcblxuICBwcml2YXRlIF9zZWdtZW50czogU2VnbWVudFtdID0gW107XG5cbiAgQElucHV0KCkgc2V0IGh0bWwoaHRtbDogc3RyaW5nKSB7XG5cbiAgICBpZiAoaHRtbCAhPT0gdGhpcy5faHRtbCkge1xuICAgICAgdGhpcy5faHRtbCA9IGh0bWw7XG4gICAgICB0aGlzLnVwZGF0ZUFsbEh0bWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFsbEh0bWwoKSB7XG5cbiAgICBpZiAoIXRoaXMuX2h0bWwpIHtcbiAgICAgIHRoaXMuYWxsSHRtbCA9ICcnO1xuICAgICAgdGhpcy5fc2VnbWVudHMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWdtZW50cyA9IGV4dHJhY3RNYXRoKHRoaXMuX2h0bWwpO1xuXG4gICAgY29uc3QgYWxsSHRtbCA9IHRoaXMuX3NlZ21lbnRzLm1hcCgoc2VnKSA9PiB7XG4gICAgICBpZiAoc2VnLm1hdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2F0ZXhTZXJ2aWNlLnJlbmRlclRvU3RyaW5nKHNlZy5yYXcsIHsgZGlzcGxheU1vZGU6IHNlZy50eXBlID09PSAnZGlzcGxheScgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlZy52YWx1ZTtcbiAgICAgIH1cbiAgICB9KS5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKz0gY3VycmVudDtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEh0bWwgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChhbGxIdG1sKTtcbiAgfVxuXG4gIGdldCBzZWdtZW50cygpOiBTZWdtZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zZWdtZW50cztcbiAgfVxufVxuIl19