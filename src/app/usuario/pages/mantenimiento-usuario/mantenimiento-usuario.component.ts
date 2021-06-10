import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { modalUser } from '../../interfaces/insertarUserinterface';
import { ResListaUser, ResUser } from '../../interfaces/listaUserinterface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mantenimiento-usuario',
  templateUrl: './mantenimiento-usuario.component.html',
  styles: [],
  providers: [NgbModalConfig, NgbModal]
})
export class MantenimientoUsuarioComponent implements OnInit {

  data!: modalUser;
  listausuario!: ResUser[]

  constructor(private _usuriaS: UsuarioService, config: NgbModalConfig, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this._usuriaS.getAllUser().subscribe(res => {
      this.listausuario = res.data.lisData;
    }, (error) => {
      window.alert('Generoun errro');
    })
  }

}
