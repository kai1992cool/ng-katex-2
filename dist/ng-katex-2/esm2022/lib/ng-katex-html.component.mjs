import { Component, computed, inject, input } from '@angular/core';
import { extractMath } from 'extract-math';
import { DomSanitizer } from '@angular/platform-browser';
import { KatexService } from './ng-katex.service';
import { throwNoProviderError } from './utils';
import * as i0 from "@angular/core";
export class KatexHtmlComponent {
    constructor() {
        this.domSanitizer = inject(DomSanitizer);
        this.katexService = inject(KatexService);
        this.html = input('');
        this.allHtml = computed(() => {
            const html = this.html();
            let allHtmlValue = '';
            let _segments = [];
            if (!html) {
                allHtmlValue = '';
                _segments = [];
                return allHtmlValue;
            }
            _segments = extractMath(html);
            const allHtml = _segments.map((seg) => {
                if (seg.math) {
                    return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
                }
                else {
                    return seg.value;
                }
            }).reduce((total, current) => {
                return total += current;
            });
            return this.domSanitizer.bypassSecurityTrustHtml(allHtml);
        });
        throwNoProviderError();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexHtmlComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.13", type: KatexHtmlComponent, isStandalone: true, selector: "ng-katex-html", inputs: { html: { classPropertyName: "html", publicName: "html", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `<span [innerHTML]="allHtml()"></span>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-katex-html',
                    template: `<span [innerHTML]="allHtml()"></span>`,
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgtaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1rYXRleC0yL3NyYy9saWIvbmcta2F0ZXgtaHRtbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLGtCQUFrQjtJQThCN0I7UUE3QlEsaUJBQVksR0FBaUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELGlCQUFZLEdBQWlCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxTQUFJLEdBQXdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxZQUFPLEdBQWlDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQztZQUM5QixJQUFJLFNBQVMsR0FBYyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNWLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxZQUFZLENBQUM7WUFDdEIsQ0FBQztZQUVELFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxFQUFFO2dCQUM3QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RixDQUFDO3FCQUNJLENBQUM7b0JBQ0osT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUMzQixPQUFPLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFHRCxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7a0lBaENVLGtCQUFrQjtzSEFBbEIsa0JBQWtCLDBNQUhuQix1Q0FBdUM7OzRGQUd0QyxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY29tcHV0ZWQsIGluamVjdCwgaW5wdXQsIElucHV0U2lnbmFsLCBTaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZXh0cmFjdE1hdGgsIFNlZ21lbnQgfSBmcm9tICdleHRyYWN0LW1hdGgnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEthdGV4U2VydmljZSB9IGZyb20gJy4vbmcta2F0ZXguc2VydmljZSc7XHJcbmltcG9ydCB7IHRocm93Tm9Qcm92aWRlckVycm9yIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWthdGV4LWh0bWwnLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gW2lubmVySFRNTF09XCJhbGxIdG1sKClcIj48L3NwYW4+YCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2F0ZXhIdG1sQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7IFxyXG4gIHByaXZhdGUga2F0ZXhTZXJ2aWNlOiBLYXRleFNlcnZpY2UgPSBpbmplY3QoS2F0ZXhTZXJ2aWNlKTtcclxuXHJcbiAgaHRtbDogSW5wdXRTaWduYWw8c3RyaW5nPiA9IGlucHV0KCcnKTtcclxuICBhbGxIdG1sOiBTaWduYWw8U2FmZUh0bWwgfCB1bmRlZmluZWQ+ID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgY29uc3QgaHRtbCAgPSB0aGlzLmh0bWwoKTtcclxuICAgIGxldCBhbGxIdG1sVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IF9zZWdtZW50czogU2VnbWVudFtdID0gW107XHJcbiAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgYWxsSHRtbFZhbHVlID0gJyc7XHJcbiAgICAgIF9zZWdtZW50cyA9IFtdO1xyXG4gICAgICByZXR1cm4gYWxsSHRtbFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZWdtZW50cyA9IGV4dHJhY3RNYXRoKGh0bWwpO1xyXG5cclxuICAgIGNvbnN0IGFsbEh0bWwgPSBfc2VnbWVudHMubWFwKChzZWc6IFNlZ21lbnQpID0+IHtcclxuICAgICAgaWYgKHNlZy5tYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2F0ZXhTZXJ2aWNlLnJlbmRlclRvU3RyaW5nKHNlZy5yYXcsIHsgZGlzcGxheU1vZGU6IHNlZy50eXBlID09PSAnZGlzcGxheScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSkucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gdG90YWwgKz0gY3VycmVudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFsbEh0bWwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRocm93Tm9Qcm92aWRlckVycm9yKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==