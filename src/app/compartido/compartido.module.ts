import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecompartidoComponent } from './pages/homecompartido/homecompartido.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EstadoPipe } from './pipes/estado.pipe';
import { ClavePipe } from './pipes/clave.pipe';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    HomecompartidoComponent,
    EstadoPipe,
    ClavePipe,
  ],
 
  imports: [
    CommonModule,
  ],
  exports:[
    HomecompartidoComponent,
    EstadoPipe,
    ClavePipe,
  ]
})
export class CompartidoModule { }
