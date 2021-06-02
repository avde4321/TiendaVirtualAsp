import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MantenimientoUsuarioComponent } from './pages/mantenimiento-usuario/mantenimiento-usuario.component';
import { CompartidoModule } from '../compartido/compartido.module';


@NgModule({
  declarations: [
    HomeUsuarioComponent,
    LoginComponent,
    MantenimientoUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    HttpClientModule,
    FormsModule,
    CompartidoModule
  ]
})
export class UsuarioModule { }
