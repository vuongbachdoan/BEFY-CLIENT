import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
