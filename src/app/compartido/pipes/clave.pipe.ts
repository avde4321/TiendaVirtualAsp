import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clavePipe'
})
export class ClavePipe implements PipeTransform {

  transform(clave:string): string {
    return '*********';
  }

}
