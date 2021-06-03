import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResMenu } from '../interfaces/listarmenuinterface';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  private _urlApi:string = environment.datosApi.URL;
  constructor(private _Http:HttpClient) { }

  listaMenu(){
    return this._Http.get<ResMenu>(`${this._urlApi}Mantenimiento/GetMenu`)
  }
}
