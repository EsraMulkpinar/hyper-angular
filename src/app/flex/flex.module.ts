import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';  
import { FlexRoutingModule } from './flex-routing.module';
import { FlexFormComponent } from './flex-components/flex-form/flex-form.component';
import { FlexMenuComponent } from './flex-components/flex-menu/flex-menu.component';
import { FlexFooterComponent } from './layout/flex-footer/flex-footer.component';
import { FlexHeaderComponent } from './layout/flex-header/flex-header.component';
import { FlexMainLayoutComponent } from './layout/flex-main-layout/flex-main-layout.component';
import { FlexSidebarComponent } from './layout/flex-sidebar/flex-sidebar.component';

@NgModule({
  declarations: [
    FlexFooterComponent,
    FlexHeaderComponent,
    FlexMainLayoutComponent,
    FlexSidebarComponent,
    FlexFormComponent,
    FlexMenuComponent,
  ],
  exports:[
    FlexFooterComponent,
    FlexHeaderComponent,
    FlexMainLayoutComponent,
    FlexSidebarComponent,
    FlexFormComponent,
    FlexMenuComponent,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    ReactiveFormsModule  
  ]
})
export class FlexModule { }
