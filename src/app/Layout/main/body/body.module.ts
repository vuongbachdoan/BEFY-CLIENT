import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button'
import { FormsModule } from '@angular/forms';
import { VimeModule } from "@vime/angular";
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    VimeModule,
    NzModalModule
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
