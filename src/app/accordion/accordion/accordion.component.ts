import { Component, ViewChildren, QueryList } from '@angular/core';
import { CollapsibleComponent } from '../collapsible/collapsible.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @ViewChildren(CollapsibleComponent) collapsibles!: QueryList<CollapsibleComponent>;

  closeAll() {
    this.collapsibles.forEach(collapsible => collapsible.isOpen = false);
  }
}
