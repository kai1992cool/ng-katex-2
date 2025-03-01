import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';
import { KatexParagraphComponent } from './ng-katex-paragraph.component';
import { KatexHtmlComponent } from './ng-katex-html.component';
import * as i0 from "@angular/core";
export class KatexModule {
}
/** @nocollapse */ KatexModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: KatexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ KatexModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: KatexModule, imports: [CommonModule,
        KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent], exports: [KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
/** @nocollapse */ KatexModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: KatexModule, providers: [
        KatexService,
    ], imports: [CommonModule,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: KatexModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        KatexDirective,
                        KatexComponent,
                        KatexParagraphComponent,
                        KatexHtmlComponent,
                    ],
                    providers: [
                        KatexService,
                    ],
                    declarations: [],
                    exports: [
                        KatexDirective,
                        KatexComponent,
                        KatexParagraphComponent,
                        KatexHtmlComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFzQi9ELE1BQU0sT0FBTyxXQUFXOzsySEFBWCxXQUFXOzRIQUFYLFdBQVcsWUFsQnBCLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0IsYUFRbEIsY0FBYztRQUNkLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsa0JBQWtCOzRIQUdULFdBQVcsYUFaWDtRQUNULFlBQVk7S0FDYixZQVJDLFlBQVk7UUFFWixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGtCQUFrQjsyRkFjVCxXQUFXO2tCQXBCdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxFQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgS2F0ZXhTZXJ2aWNlIH0gZnJvbSAnLi9uZy1rYXRleC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2F0ZXhEaXJlY3RpdmUgfSBmcm9tICcuL25nLWthdGV4LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEthdGV4Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLYXRleFBhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJy4vbmcta2F0ZXgtcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEthdGV4SHRtbENvbXBvbmVudCB9IGZyb20gJy4vbmcta2F0ZXgtaHRtbC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBLYXRleERpcmVjdGl2ZSxcclxuICAgIEthdGV4Q29tcG9uZW50LFxyXG4gICAgS2F0ZXhQYXJhZ3JhcGhDb21wb25lbnQsXHJcbiAgICBLYXRleEh0bWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEthdGV4U2VydmljZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgS2F0ZXhEaXJlY3RpdmUsXHJcbiAgICBLYXRleENvbXBvbmVudCxcclxuICAgIEthdGV4UGFyYWdyYXBoQ29tcG9uZW50LFxyXG4gICAgS2F0ZXhIdG1sQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleE1vZHVsZSB7IH1cclxuIl19