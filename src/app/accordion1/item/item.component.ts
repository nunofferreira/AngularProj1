import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // @Input() titulo : string = '';
  // @Input() conteudo : string = '';
  @Input() info!: { title: string, content: string };
  @Input() indice!: number;
  @Output() valor: EventEmitter<number> = new EventEmitter();

  activo: boolean = false;

  // changeActivo(valor : boolean) {
  //   this.activo=valor;
  // }

  changeActivo() {
    this.activo = !this.activo;
  }
  fecha() {
    this.activo = false;
  }

  processa() {
    this.valor.emit(this.indice);
    this.changeActivo();
  }
}
