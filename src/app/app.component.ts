import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaVirtualAsp';
  listaDato!:string[];

  presentarLista(){
    this.listaDato = ['Arturo','Maoly','Vicky','Pedro'];
  }
}
