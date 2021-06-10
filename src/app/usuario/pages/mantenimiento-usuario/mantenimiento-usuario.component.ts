import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { modalUser } from '../../interfaces/insertarUserinterface';
import { ResListaUser, ResUser } from '../../interfaces/listaUserinterface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mantenimiento-usuario',
  templateUrl: './mantenimiento-usuario.component.html',
  styles: [
    `
    .form_login{
      left : 50%;
      top : 50%;
      position : absolute;
      transform : translate(-50%,-50%);
      }
    `
  ],
  providers: [NgbModalConfig, NgbModal]
})
export class MantenimientoUsuarioComponent implements OnInit {

  txUser!: string
  txPass!: string
  txEmail!: string

  txIdEdi!: number
  txUserEdi!: string
  txPassEdi!: string
  txEmailEdi!: string
  txEstadoEdi!: string

  data!: modalUser;
  listausuario!: ResUser[]

  constructor(private _usuriaS: UsuarioService, config: NgbModalConfig, private _modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

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

  openEditar(item: ResUser,content: any) {

    this.txIdEdi = item.id;
    this.txUserEdi = item.usuario1;
    this.txPassEdi = item.clave;
    this.txEmailEdi = item.txEmail;
    this.txEstadoEdi = item.estado;
    
    this._modalService.open(content);
  }

  editar(){
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
      this.txPassEdi  = '';
      this.txEmailEdi = '';
      this.txEstadoEdi = '';

      this.ngOnInit()
    });
  }

}
