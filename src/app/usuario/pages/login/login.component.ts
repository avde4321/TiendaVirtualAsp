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

  constructor(private _usuriaS: UsuarioService) { }

  ngOnInit(): void {
  }
  
  login() {
    this._usuriaS.login(this.txUser, this.txPass).subscribe(res=>{
      console.log(res);
    })
  }


}
