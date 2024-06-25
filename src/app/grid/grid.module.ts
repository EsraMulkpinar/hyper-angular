import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRoutingModule } from './grid-routing.module';
import { GridHeaderComponent } from './layout/grid-header/grid-header.component';
import { GridSidebarComponent } from './layout/grid-sidebar/grid-sidebar.component';
import { GridFooterComponent } from './layout/grid-footer/grid-footer.component';
import { GridMainLayoutComponent } from './layout/grid-main-layout/grid-main-layout.component';
import { GridFormComponent } from './components/grid-form/grid-form.component';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
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
  imports: [
    CommonModule,
    GridRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class GridModule { }
