import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { FlexMainLayoutComponent } from './flex/layout/flex-main-layout/flex-main-layout.component';
import { GridMainLayoutComponent } from './grid/grid-layout/grid-main-layout/grid-main-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeLayoutComponent,
  },
  {
    path: 'flex',
    component:FlexMainLayoutComponent,
  },
  {
    path: 'grid',
    component:GridMainLayoutComponent,

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
