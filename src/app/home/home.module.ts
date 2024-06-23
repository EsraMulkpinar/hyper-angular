import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class HomeModule { }
