import { Injectable, ElementRef } from '@angular/core';

import * as katex from 'katex';

@Injectable()
export class KatexService {

  renderExpression(e: string, element: ElementRef, options?: any) {
    return katex.render(e, element.nativeElement, options);
  }

}
