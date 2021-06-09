import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { modalUser } from '../interfaces/insertarUserinterface';
import { ResListaUser } from '../interfaces/listaUserinterface';
import { ResLogin } from '../interfaces/logininterface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private _urlLogin:string = environment.datosApi.URL;
 private _seguridadToken:string = environment.seguridad.keyToken;
  constructor(private _Http:HttpClient) { }

  login(user:string, Pass:string){

    return this._Http.get<ResLogin>(`${this._urlLogin}Mantenimiento/Login/${user}/${Pass}`)
  }

  guardarToken(token:string){
    localStorage.setItem(this._seguridadToken, token)
  }

  verificaToken(){
     const token = localStorage.getItem(this._seguridadToken);
     if(token){
      return of(true);
     }
     return of(false);
  }

  getAllUser(){
    return this._Http.get<ResListaUser>(`${this._urlLogin}Mantenimiento/GetUsuarioall`)
  }

  inseratUser(data:modalUser){
    debugger
    return this._Http.post<ResLogin>(`${this._urlLogin}Mantenimiento/Postsaveuser/`,data)
  }
}
