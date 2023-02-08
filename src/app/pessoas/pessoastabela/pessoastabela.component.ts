import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/shared/pessoa.type';

@Component({
  selector: 'app-pessoastabela',
  templateUrl: './pessoastabela.component.html',
  styleUrls: ['./pessoastabela.component.css']
})
export class PessoastabelaComponent {


  @Input() listaPessoas: Pessoa[] = [];

  eliminaPessoa(id: number | undefined) {

  }
}