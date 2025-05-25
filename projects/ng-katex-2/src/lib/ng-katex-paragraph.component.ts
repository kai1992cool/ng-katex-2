
import { ChangeDetectionStrategy, Component, computed, input, InputSignal, Signal } from '@angular/core';
import { extractMath, Segment } from 'extract-math';
import { KatexComponent } from './ng-katex.component';
import { throwNoProviderError } from './utils';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
    <p>
      @for (segment of segments(); track segment) {
        @if (segment.math) {
          <ng-katex
            [equation]="segment.raw"
            [options]="{ displayMode: segment.type === 'display' }">
          </ng-katex>
        } @else {
          {{ segment.value }}
        }
      }
    </p>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KatexComponent],
  standalone: true,
})
export class KatexParagraphComponent {
  paragraph: InputSignal<string> = input.required();
  segments: Signal<Segment[]> = computed(() => {
    let segments = [];
    const paragraph = this.paragraph();
    segments = extractMath(paragraph);
    return segments;
  });
  
  constructor() {
    throwNoProviderError();
  }
}
