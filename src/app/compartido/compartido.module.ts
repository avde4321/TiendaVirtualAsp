import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecompartidoComponent } from './pages/homecompartido/homecompartido.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    HomecompartidoComponent,
  ],
 
  imports: [
    CommonModule,
  ],
  exports:[
    HomecompartidoComponent,
   
  ]
})
export class CompartidoModule { }
