import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { FlexRoutingModule } from './flex-routing.module';
import { FlexMainLayoutComponent } from './flex-layout/flex-main-layout/flex-main-layout.component';
import { FlexSidebarComponent } from './flex-layout/flex-sidebar/flex-sidebar.component';
import { FlexFooterComponent } from './flex-layout/flex-footer/flex-footer.component';
import { FlexHeaderComponent } from './flex-layout/flex-header/flex-header.component';
import { FlexFormComponent } from './flex-components/flex-form/flex-form.component';
import { FlexMenuComponent } from './flex-components/flex-menu/flex-menu.component';

@NgModule({
  declarations: [
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
