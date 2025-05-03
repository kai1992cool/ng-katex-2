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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWthdGV4LTIvc3JjL2xpYi9uZy1rYXRleC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQWdCLE1BQU0sT0FBTyxDQUFDOztBQUc3RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixNQUFNLENBQUMsUUFBZ0IsRUFBRSxPQUFtQixFQUFFLE9BQXNCO1FBQ2xFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0IsRUFBRSxPQUFzQjtRQUNyRCxPQUFPLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7NkhBUlUsWUFBWTtpSUFBWixZQUFZOzRGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZW5kZXIsIHJlbmRlclRvU3RyaW5nLCBLYXRleE9wdGlvbnMgfSBmcm9tICdrYXRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLYXRleFNlcnZpY2Uge1xuXG4gIHJlbmRlcihlcXVhdGlvbjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50UmVmLCBvcHRpb25zPzogS2F0ZXhPcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlbmRlcihlcXVhdGlvbiwgZWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJlbmRlclRvU3RyaW5nKGVxdWF0aW9uOiBzdHJpbmcsIG9wdGlvbnM/OiBLYXRleE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiByZW5kZXJUb1N0cmluZyhlcXVhdGlvbiwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==