import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  txUser!: string
  txPass!: string
  estadoLogin:boolean = true;

  constructor(private _usuriaS: UsuarioService) { }

  ngOnInit(): void {
  }
  
  login() {
    this.estadoLogin = false
    setTimeout(() => {
      this._usuriaS.login(this.txUser, this.txPass).subscribe(res=>{
        this._usuriaS.guardarToken(res.data.token)
        this.txUser = '';
        this.txPass = '';
        this.estadoLogin = true
      },(error)=>
      {
        this.estadoLogin = true;
      })
    }, 2000);
  }
}
