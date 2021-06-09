import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPipe'
})
export class EstadoPipe implements PipeTransform {

  transform(esatdo:string): string {
    return esatdo==='A'?'Activo':'Inactivo';
  }

}
