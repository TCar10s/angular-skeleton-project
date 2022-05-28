import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutsideClickDirective } from './directives/directives/click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [OutsideClickDirective],
  exports: [OutsideClickDirective],
})
export class SharedModule {}
