import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent {
  @Input() header: string = '';
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
