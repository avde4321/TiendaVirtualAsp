import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompartidoComponent } from '../compartido/pages/homecompartido/homecompartido.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { MantenimientoUsuarioComponent } from './pages/mantenimiento-usuario/mantenimiento-usuario.component';

const routes: Routes = [
  {
    path:'',children:[
      {
        path:'login',component:LoginComponent
      }
    ]
  },
  {
    path:'mantenimiento',component:HomeUsuarioComponent,
    children:[
      {
        path:'usuario',component:MantenimientoUsuarioComponent,canActivate:[UsuarioGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
