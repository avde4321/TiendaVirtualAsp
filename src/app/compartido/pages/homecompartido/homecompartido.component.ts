import { Component, OnInit } from '@angular/core';
import { LisDatum } from '../../interfaces/listarmenuinterface';
import { CompartidoService } from '../../services/compartido.service';

@Component({
  selector: 'app-homecompartido',
  templateUrl: './homecompartido.component.html',
  styles: [
  ]
})
export class HomecompartidoComponent implements OnInit {

  listamen!:LisDatum[] 
  constructor(private _componeteS:CompartidoService) { }

  ngOnInit(): void {
    this.cargaMenu();
  }

  cargaMenu(){
      this._componeteS.listaMenu().subscribe(res =>{
        console.log(res)
        this.listamen = res.data.lisData;
      });
  }
}
