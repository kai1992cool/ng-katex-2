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
/** @nocollapse */ KatexModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ KatexModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, imports: [CommonModule,
        KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent], exports: [KatexDirective,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
/** @nocollapse */ KatexModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, providers: [
        KatexService,
    ], imports: [CommonModule,
        KatexComponent,
        KatexParagraphComponent,
        KatexHtmlComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: KatexModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFzQi9ELE1BQU0sT0FBTyxXQUFXOzs0SEFBWCxXQUFXOzZIQUFYLFdBQVcsWUFsQnBCLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0IsYUFRbEIsY0FBYztRQUNkLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsa0JBQWtCOzZIQUdULFdBQVcsYUFaWDtRQUNULFlBQVk7S0FDYixZQVJDLFlBQVk7UUFFWixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGtCQUFrQjs0RkFjVCxXQUFXO2tCQXBCdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxFQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBLYXRleFNlcnZpY2UgfSBmcm9tICcuL25nLWthdGV4LnNlcnZpY2UnO1xuaW1wb3J0IHsgS2F0ZXhEaXJlY3RpdmUgfSBmcm9tICcuL25nLWthdGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBLYXRleENvbXBvbmVudCB9IGZyb20gJy4vbmcta2F0ZXguY29tcG9uZW50JztcbmltcG9ydCB7IEthdGV4UGFyYWdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50JztcbmltcG9ydCB7IEthdGV4SHRtbENvbXBvbmVudCB9IGZyb20gJy4vbmcta2F0ZXgtaHRtbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEthdGV4RGlyZWN0aXZlLFxuICAgIEthdGV4Q29tcG9uZW50LFxuICAgIEthdGV4UGFyYWdyYXBoQ29tcG9uZW50LFxuICAgIEthdGV4SHRtbENvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgS2F0ZXhTZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEthdGV4RGlyZWN0aXZlLFxuICAgIEthdGV4Q29tcG9uZW50LFxuICAgIEthdGV4UGFyYWdyYXBoQ29tcG9uZW50LFxuICAgIEthdGV4SHRtbENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgS2F0ZXhNb2R1bGUgeyB9XG4iXX0=