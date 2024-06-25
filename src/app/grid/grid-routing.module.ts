import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridMainLayoutComponent } from './grid-layout/grid-main-layout/grid-main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GridMainLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
