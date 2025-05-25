import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { KatexModule } from 'ng-katex-2';

import { AppComponent } from './app.component';

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        KatexModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
