import { inject } from "@angular/core";
import { KatexService } from "./ng-katex.service";

export const throwNoProviderError = () => {
    
    const katexService = inject(KatexService, {
        optional: true,
      });
      if(!katexService) {
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
}