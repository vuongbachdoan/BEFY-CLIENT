import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';
import { BodyModule } from './body/body.module';
import { ProfileModule } from './profile/profile.module';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SidebarModule,
    BodyModule,
    ProfileModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule
  ],
  exports: [MainComponent],
})
export class MainModule { }
