import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KatexOptions } from 'katex';
import { KatexDirective } from './ng-katex.directive';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `,
  standalone: true,
  imports: [KatexDirective],
})
export class KatexComponent {

  @Input() equation!: string;
  @Input() options!: KatexOptions;
  @Output() onError = new EventEmitter<any>();

  hasError(error: any) {
    this.onError.emit(error);
  }
}
