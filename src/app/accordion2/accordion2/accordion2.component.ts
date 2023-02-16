import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Accordion2itemComponent } from '../accordion2item/accordion2item.component';

@Component({
  selector: 'app-accordion2',
  templateUrl: './accordion2.component.html',
  styleUrls: ['./accordion2.component.css']
})
export class Accordion2Component {
  @Input() itens!: { title: string, content: string }[];

  @ViewChildren(Accordion2itemComponent) listaItens!: QueryList<Accordion2itemComponent>;

  processa(indice: number) {

    this.listaItens.get(indice)?.changeActivo();

    for (let pos = 0; pos < this.listaItens.length; pos++) {
      if (pos !== indice) {
        this.listaItens.get(pos)?.fecha();
      }
    }
  }
}
