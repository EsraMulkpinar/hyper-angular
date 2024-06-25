import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexFormComponent } from './flex-components/flex-form/flex-form.component';
import { FlexMainLayoutComponent } from './layout/flex-main-layout/flex-main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FlexMainLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexRoutingModule { }
