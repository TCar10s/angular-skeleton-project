import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[validate]',
})
export class MessageErrorFieldsContainerDirective {
  constructor(public vcr: ViewContainerRef) {}
}
