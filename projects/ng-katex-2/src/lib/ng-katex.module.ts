import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';
import { KatexParagraphComponent } from './ng-katex-paragraph.component';
import { KatexHtmlComponent } from './ng-katex-html.component';

@NgModule({
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
  declarations: [
  ],
  exports: [
    KatexDirective,
    KatexComponent,
    KatexParagraphComponent,
    KatexHtmlComponent,
  ],
})
export class KatexModule { }
