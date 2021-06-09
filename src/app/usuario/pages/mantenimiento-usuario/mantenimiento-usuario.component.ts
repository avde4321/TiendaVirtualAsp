import { Component, OnInit } from '@angular/core';
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
  ]
})
export class MantenimientoUsuarioComponent implements OnInit {

  txUser!: string
  txPass!: string
  txEmail!:string
  data!:modalUser;
  listausuario!:ResUser[]
  constructor(private _usuriaS: UsuarioService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
      this._usuriaS.getAllUser().subscribe(res =>{
        this.listausuario = res.data.lisData;
      },(error) => {
        window.alert('Generoun errro');
      })
  }

  

  insertarUser(){

    this.data = {
      usuario1 : this.txUser,
      clave: this.txPass,
      txEmail : this.txEmail
    }

    this._usuriaS.inseratUser(this.data).subscribe(res =>{
      this.txUser = '';
      this.txPass = '';
      this.txEmail = '';
      window.alert('Usuario Guardado corectamente');
    },(error) => {
      window.alert('Generoun errro');
    });
  }
}
