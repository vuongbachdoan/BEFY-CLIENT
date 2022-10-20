import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzToolTipModule,
    NzIconModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule { }
