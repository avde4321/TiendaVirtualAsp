import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompartidoComponent } from '../compartido/pages/homecompartido/homecompartido.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',children:[
      {
        path:'login',component:LoginComponent
      }
    ]
  },
  {
    path:'mantenimiento',component:HomecompartidoComponent,
    children:[
      {
        path:'usuario',component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
