import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRoutingModule } from './grid-routing.module';
import { GridHeaderComponent } from './grid-layout/grid-header/grid-header.component';
import { GridSidebarComponent } from './grid-layout/grid-sidebar/grid-sidebar.component';
import { GridFooterComponent } from './grid-layout/grid-footer/grid-footer.component';
import { GridMainLayoutComponent } from './grid-layout/grid-main-layout/grid-main-layout.component';
import { GridFormComponent } from './grid-components/grid-form/grid-form.component';
import { GridMenuComponent } from './grid-components/grid-menu/grid-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GridHeaderComponent,
    GridSidebarComponent,
    GridFooterComponent,
    GridMainLayoutComponent,
    GridFormComponent,
    GridMenuComponent
  ],
  exports:[
    GridHeaderComponent,
    GridSidebarComponent,
    GridFooterComponent,
    GridMainLayoutComponent,
    GridFormComponent,
    GridMenuComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class GridModule { }
