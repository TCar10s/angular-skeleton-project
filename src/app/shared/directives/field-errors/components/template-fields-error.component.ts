import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  templateUrl: './template-fields-error.component.html',
  styles: [
    `
      .hide {
        display: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFieldsErrorsComponent {
  errorMessage: string;
  hide: boolean = true;

  @Input()
  set text(value: any) {
    if (value !== this.errorMessage) {
      this.errorMessage = value;
      this.hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.errorMessage = '';
  }
}
