import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
