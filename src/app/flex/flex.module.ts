import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { FlexRoutingModule } from './flex-routing.module';
import { FlexMainLayoutComponent } from './layout/flex-main-layout/flex-main-layout.component';
import { SidebarComponent } from './layout/flex-sidebar/flex-sidebar.component';
import { FlexFooterComponent } from './layout/flex-footer/flex-footer.component';
import { FlexHeaderComponent } from './layout/flex-header/flex-header.component';
import { FlexFormComponent } from './components/flex-form/flex-form.component';
import { FlexMenuComponent } from './components/flex-menu/flex-menu.component';

@NgModule({
  declarations: [
    FlexFooterComponent,
    FlexHeaderComponent,
    FlexMainLayoutComponent,
    SidebarComponent,
    FlexFormComponent,
    FlexMenuComponent,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class FlexModule { }
