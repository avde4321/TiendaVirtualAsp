import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { modalUser } from '../../interfaces/insertarUserinterface';
import { ResUser } from '../../interfaces/listaUserinterface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: []
})
export class CardUsuarioComponent implements OnInit {

  txUser!: string
  txPass!: string
  txEmail!: string

  txIdEdi!: number
  txUserEdi!: string
  txPassEdi!: string
  txEmailEdi!: string
  txEstadoEdi!: string

  @Input() item!: ResUser
  data!: modalUser;
  

  constructor(private _usuriaS: UsuarioService, config: NgbModalConfig, private _modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    
  }
  

  open(content: any) {
    this._modalService.open(content);
  }

  insertarUser() {

    this.data = {
      usuario1: this.txUser,
      clave: this.txPass,
      txEmail: this.txEmail
    }

    this._usuriaS.inseratUser(this.data).subscribe(res => {
      this.txUser = '';
      this.txPass = '';
      this.txEmail = '';
      window.alert('Usuario Guardado corectamente');
      this.ngOnInit()
    }, (error) => {
      window.alert('Generoun errro');
    });
  }

  openEditar(item: ResUser, content: any) {

    this.txIdEdi = item.id;
    this.txUserEdi = item.usuario1;
    this.txPassEdi = item.clave;
    this.txEmailEdi = item.txEmail;
    this.txEstadoEdi = item.estado;

    this._modalService.open(content);
  }

  editar() {
    this.data = {
      id: this.txIdEdi,
      usuario1: this.txUserEdi,
      clave: this.txPassEdi,
      txEmail: this.txEmailEdi,
      estado: this.txEstadoEdi
    }

    this._usuriaS.editarUser(this.data).subscribe(res => {

      this.txIdEdi = 0;
      this.txUserEdi = '';
      this.txPassEdi = '';
      this.txEmailEdi = '';
      this.txEstadoEdi = '';

      this.ngOnInit()
    });
  }
}
