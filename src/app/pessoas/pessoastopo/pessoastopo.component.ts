import { Component } from '@angular/core';
import { Pessoa } from 'src/app/shared/pessoa.type';
import { pessoas } from 'src/app/shared/pessoas';

@Component({
  selector: 'app-pessoastopo',
  templateUrl: './pessoastopo.component.html',
  styleUrls: ['./pessoastopo.component.css']
})
export class PessoastopoComponent {
  listaPessoasOriginal: Pessoa[] = pessoas;
  listaPessoas: Pessoa[] = pessoas;

}
