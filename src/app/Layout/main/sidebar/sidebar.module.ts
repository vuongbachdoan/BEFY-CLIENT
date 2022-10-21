import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzToolTipModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
