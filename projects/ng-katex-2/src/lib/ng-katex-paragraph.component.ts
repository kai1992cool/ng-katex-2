
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { extractMath, Segment } from 'extract-math';
import { KatexComponent } from './ng-katex.component';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
    <p>
      @for (segment of segments; track segment) {
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

  segments: Segment[] = [];

  private _paragraph!: string;

  @Input() set paragraph(paragraph: string) {

    if (paragraph !== this._paragraph) {
      this._paragraph = paragraph;
      this.segments = extractMath(this._paragraph);
    }
  }

}
