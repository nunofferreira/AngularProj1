import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoaspesquisa',
  templateUrl: './pessoaspesquisa.component.html',
  styleUrls: ['./pessoaspesquisa.component.css']
})
export class PessoaspesquisaComponent {
  cpesquisa: string = "";

  @Output() palavraPesquisa: EventEmitter<string> = new EventEmitter;

  processaPesquisa() {
    this.palavraPesquisa.emit(this.cpesquisa)
  }

  limpaPesquisa() {
    this.cpesquisa = '';
    this.palavraPesquisa.emit(this.cpesquisa);
  }

}
