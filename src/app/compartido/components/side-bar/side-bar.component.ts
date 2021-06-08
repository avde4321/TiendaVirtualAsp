import { Component, Input, OnInit } from '@angular/core';
import { LisDatum } from '../../interfaces/listarmenuinterface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
  ]
})
export class SideBarComponent implements OnInit {

  sideEstado: boolean = false;

  @Input() listamen!: LisDatum[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.listamen)
  }

  open() {
    if (!this.sideEstado) {
      this.sideEstado = true;
    }
    else {
      this.sideEstado = false;
    }

  }
}
