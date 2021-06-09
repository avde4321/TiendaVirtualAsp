import { absoluteFrom } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
export class LoginComponent implements OnInit {

  txUser!: string
  txPass!: string
  estadoLogin: boolean = true;

  constructor(private _usuriaS: UsuarioService, private _router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.estadoLogin = false
    setTimeout(() => {
      this._usuriaS.login(this.txUser, this.txPass).subscribe(res => {
        this._usuriaS.guardarToken(res.data.token)
        this.txUser = '';
        this.txPass = '';
        this.estadoLogin = true
        this._router.navigateByUrl('/usuario/mantenimiento/usuario')
      }, (error) => {
        this.estadoLogin = true;
      })
    }, 2000);
  }
}
