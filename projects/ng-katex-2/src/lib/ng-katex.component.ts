import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { KatexOptions } from 'katex';
import { KatexDirective } from './ng-katex.directive';
import { throwNoProviderError } from './utils';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation()"
          [katex-options]="options()"
          (someEvent)="hasError($event)">
    </span>
  `,
  standalone: true,
  imports: [KatexDirective],
})
export class KatexComponent {
  equation: InputSignal<string> = input.required();
  options: InputSignal<KatexOptions> = input<KatexOptions>({});
  onError: OutputEmitterRef<any> = output<any>();

  hasError(error: any) {
    this.onError.emit(error);
  }
  
  constructor() {
    throwNoProviderError();
  }
}
