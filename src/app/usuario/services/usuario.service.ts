import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}
