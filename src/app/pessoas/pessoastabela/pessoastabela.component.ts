import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from 'src/app/shared/pessoa.type';

@Component({
  selector: 'app-pessoastabela',
  templateUrl: './pessoastabela.component.html',
  styleUrls: ['./pessoastabela.component.css']
})
export class PessoastabelaComponent {

  @Input() listaPessoas: Pessoa[] = [];
  @Output() idAEliminar: EventEmitter<number> = new EventEmitter();
  @Output() idDetalhe: EventEmitter<number> = new EventEmitter();

  eliminaPessoa(id: number | undefined) {
    // id - payload
    this.idAEliminar.emit(id);
  }

  mostraDetalhe(id: number) {
    console.log(id);
    this.idDetalhe.emit(id);
  }

}