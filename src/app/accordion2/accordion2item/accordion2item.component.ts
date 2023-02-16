import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion2item',
  templateUrl: './accordion2item.component.html',
  styleUrls: ['./accordion2item.component.css']
})
export class Accordion2itemComponent {

  activo: boolean = false;

  changeActivo() {
    this.activo = !this.activo;
  }
  fecha() {
    this.activo = false;
  }

  // changeActivo(valor : boolean) {
  //   this.activo=valor;
  // }

}
