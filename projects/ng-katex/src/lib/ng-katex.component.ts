import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KatexOptions } from 'katex';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `,
  standalone: true,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
