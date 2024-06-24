import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { HeaderGridComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    HeaderGridComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
