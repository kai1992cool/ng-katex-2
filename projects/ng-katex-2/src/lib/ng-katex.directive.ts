import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { KatexService } from './ng-katex.service';
import { KatexOptions } from 'katex';
import { throwNoProviderError } from './utils';

@Directive({
  selector: '[katex]',
  standalone: true,
})
export class KatexDirective {
  private el: ElementRef = inject(ElementRef);
  private katexService: KatexService = inject(KatexService);
  equation: InputSignal<string> = input.required({
    alias: 'katex',
  });
  options: InputSignal<KatexOptions> = input<KatexOptions>({}, {
    alias: 'katex-options'
  });
  onError: OutputEmitterRef<any> = output<any>();

  constructor() {
    throwNoProviderError();
    effect(() => {
      try {
        this.katexService.render(this.equation(), this.el, this.options());
      } catch (e) {
        this.onError.emit(e);
      }
    });
  }

}
