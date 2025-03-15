import { inject } from "@angular/core";
import { KatexService } from "./ng-katex.service";
export const throwNoProviderError = () => {
    const katexService = inject(KatexService, {
        optional: true,
    });
    if (!katexService) {
        throw new Error(`
        KatexService is not provided. Please provide it in your module
        
        If using modules:

        import { KatexModule } from 'ng-katex';
        import { BrowserModule } from '@angular/platform-browser';
        ...
        @NgModule({
          imports: [
            BrowserModule,
            KatexModule,
            ...
          ],
          declarations: [AppComponent],
          bootstrap: [AppComponent]
        })

        class AppModule {}
        
        If using standalone bootstrapping:

        import { bootstrapApplication } from '@angular/platform-browser';
        import { importProvidersFrom } from '@angular/core';
        import { KatexModule } from 'ng-katex';

        bootstrapApplication(AppComponent, {
          providers: [
            importProvidersFrom(KatexModule)
          ]
        }).catch(err => console.error(err));

        Docs: https://www.npmjs.com/package/ng-katex-2
        `);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1rYXRleC0yL3NyYy9saWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO0lBRXJDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDdEMsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUM7SUFDSCxJQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBaUNYLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLYXRleFNlcnZpY2UgfSBmcm9tIFwiLi9uZy1rYXRleC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGhyb3dOb1Byb3ZpZGVyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGthdGV4U2VydmljZSA9IGluamVjdChLYXRleFNlcnZpY2UsIHtcclxuICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKCFrYXRleFNlcnZpY2UpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXHJcbiAgICAgICAgS2F0ZXhTZXJ2aWNlIGlzIG5vdCBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgaXQgaW4geW91ciBtb2R1bGVcclxuICAgICAgICBcclxuICAgICAgICBJZiB1c2luZyBtb2R1bGVzOlxyXG5cclxuICAgICAgICBpbXBvcnQgeyBLYXRleE1vZHVsZSB9IGZyb20gJ25nLWthdGV4JztcclxuICAgICAgICBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbiAgICAgICAgLi4uXHJcbiAgICAgICAgQE5nTW9kdWxlKHtcclxuICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICAgICAgS2F0ZXhNb2R1bGUsXHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXHJcbiAgICAgICAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgSWYgdXNpbmcgc3RhbmRhbG9uZSBib290c3RyYXBwaW5nOlxyXG5cclxuICAgICAgICBpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4gICAgICAgIGltcG9ydCB7IGltcG9ydFByb3ZpZGVyc0Zyb20gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICAgICAgICBpbXBvcnQgeyBLYXRleE1vZHVsZSB9IGZyb20gJ25nLWthdGV4JztcclxuXHJcbiAgICAgICAgYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgaW1wb3J0UHJvdmlkZXJzRnJvbShLYXRleE1vZHVsZSlcclxuICAgICAgICAgIF1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgRG9jczogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvbmcta2F0ZXgtMlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG59Il19