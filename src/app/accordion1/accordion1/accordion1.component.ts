import { Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-accordion1',
  templateUrl: './accordion1.component.html',
  styleUrls: ['./accordion1.component.css']
})
export class Accordion1Component {

  // @Input() itens : any;
  @Input() itens!: { title: string, content: string }[];

  // document.querySelectorAll("app-item")

  @ViewChildren(ItemComponent) listaItens!: QueryList<ItemComponent>;

  ngAfterViewInit() {

  }

  processaIndice(indice: number) {
    for (let pos = 0; pos < this.listaItens.length; pos++) {
      if (pos !== indice) {
        this.listaItens.get(pos)?.fecha();
      }
    }
  }

}
