import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateFieldsErrorsComponent } from './components/template-fields-error.component';
import { MessageErrorFieldsContainerDirective } from './directive/message-error-container-fields.directive';
import { MessageErrorFieldsSubmitDirective } from './directive/message-error-container-submit.directive';
import { MessageErrorFieldsDirective } from './directive/message-error-container.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MessageErrorFieldsContainerDirective,
    MessageErrorFieldsSubmitDirective,
    MessageErrorFieldsDirective,
    TemplateFieldsErrorsComponent,
  ],
  exports: [
    MessageErrorFieldsContainerDirective,
    MessageErrorFieldsSubmitDirective,
    MessageErrorFieldsDirective,
    TemplateFieldsErrorsComponent,
  ],
  providers: [],
})
export class FieldErrorsModule {}
