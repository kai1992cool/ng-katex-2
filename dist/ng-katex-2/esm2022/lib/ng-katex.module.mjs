import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';
import { KatexParagraphComponent } from './ng-katex-paragraph.component';
import { KatexHtmlComponent } from './ng-katex-html.component';
import * as i0 from "@angular/core";
export class KatexModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, imports: [CommonModule,
            KatexDirective,
            KatexComponent,
            KatexParagraphComponent,
            KatexHtmlComponent], exports: [KatexDirective,
            KatexComponent,
            KatexParagraphComponent,
            KatexHtmlComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, providers: [
            KatexService,
        ], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: KatexModule, decorators: [{
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
                    exports: [
                        KatexDirective,
                        KatexComponent,
                        KatexParagraphComponent,
                        KatexHtmlComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcta2F0ZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcta2F0ZXgtMi9zcmMvbGliL25nLWthdGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFvQi9ELE1BQU0sT0FBTyxXQUFXO2tJQUFYLFdBQVc7bUlBQVgsV0FBVyxZQWhCcEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLGtCQUFrQixhQU1sQixjQUFjO1lBQ2QsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixrQkFBa0I7bUlBR1QsV0FBVyxhQVZYO1lBQ1QsWUFBWTtTQUNiLFlBUkMsWUFBWTs7NEZBZ0JILFdBQVc7a0JBbEJ2QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjtxQkFDbkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBLYXRleFNlcnZpY2UgfSBmcm9tICcuL25nLWthdGV4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLYXRleERpcmVjdGl2ZSB9IGZyb20gJy4vbmcta2F0ZXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgS2F0ZXhDb21wb25lbnQgfSBmcm9tICcuL25nLWthdGV4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEthdGV4UGFyYWdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC1wYXJhZ3JhcGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2F0ZXhIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1rYXRleC1odG1sLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEthdGV4RGlyZWN0aXZlLFxyXG4gICAgS2F0ZXhDb21wb25lbnQsXHJcbiAgICBLYXRleFBhcmFncmFwaENvbXBvbmVudCxcclxuICAgIEthdGV4SHRtbENvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgS2F0ZXhTZXJ2aWNlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgS2F0ZXhEaXJlY3RpdmUsXHJcbiAgICBLYXRleENvbXBvbmVudCxcclxuICAgIEthdGV4UGFyYWdyYXBoQ29tcG9uZW50LFxyXG4gICAgS2F0ZXhIdG1sQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLYXRleE1vZHVsZSB7IH1cclxuIl19