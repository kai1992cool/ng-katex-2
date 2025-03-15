import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { extractMath, Segment } from 'extract-math';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { KatexService } from './ng-katex.service';
import { throwNoProviderError } from './utils';

@Component({
  selector: 'ng-katex-html',
  template: `<span [innerHTML]="allHtml()"></span>`,
  standalone: true,
})
export class KatexHtmlComponent {
  private domSanitizer: DomSanitizer = inject(DomSanitizer); 
  private katexService: KatexService = inject(KatexService);

  html: InputSignal<string> = input('');
  allHtml: Signal<SafeHtml | undefined> = computed(() => {
    const html  = this.html();
    let allHtmlValue: string = '';
    let _segments: Segment[] = [];
    if (!html) {
      allHtmlValue = '';
      _segments = [];
      return allHtmlValue;
    }

    _segments = extractMath(html);

    const allHtml = _segments.map((seg: Segment) => {
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

  constructor() {
    throwNoProviderError();
  }
}
