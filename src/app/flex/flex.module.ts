import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { FlexRoutingModule } from './flex-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FormComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class FlexModule { }
