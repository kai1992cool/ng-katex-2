import { Injectable } from '@angular/core';
import { render, renderToString } from 'katex';
import * as i0 from "@angular/core";
export class KatexService {
    render(equation, element, options) {
        return render(equation, element.nativeElement, options);
    }
    renderToString(equation, options) {
        return renderToString(equation, options);
    }
}
/** @nocollapse */ KatexService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ KatexService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQWdCLE1BQU0sT0FBTyxDQUFDOztBQUc3RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixNQUFNLENBQUMsUUFBZ0IsRUFBRSxPQUFtQixFQUFFLE9BQXNCO1FBQ2xFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0IsRUFBRSxPQUFzQjtRQUNyRCxPQUFPLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7NkhBUlUsWUFBWTtpSUFBWixZQUFZOzRGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlbmRlciwgcmVuZGVyVG9TdHJpbmcsIEthdGV4T3B0aW9ucyB9IGZyb20gJ2thdGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEthdGV4U2VydmljZSB7XHJcblxyXG4gIHJlbmRlcihlcXVhdGlvbjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50UmVmLCBvcHRpb25zPzogS2F0ZXhPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyKGVxdWF0aW9uLCBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVG9TdHJpbmcoZXF1YXRpb246IHN0cmluZywgb3B0aW9ucz86IEthdGV4T3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcmVuZGVyVG9TdHJpbmcoZXF1YXRpb24sIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=