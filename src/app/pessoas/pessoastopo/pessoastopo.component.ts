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

  deletePessoa(id: number) {
    if (typeof id === "number") { // este if é para testar o tipo de dados 
      // retorna -1 caso não encontre
      let posicao = this.listaPessoasOriginal.findIndex(pessoa => pessoa.id === id);
      if (posicao !== -1) {
        this.listaPessoasOriginal.splice(posicao, 1);
        this.listaPessoas = [...this.listaPessoasOriginal]
      } else {
        // ex: "eliminaPessoa(25)"
        alert("Id Inexistente!");
      }
    } else {
      // ex: "eliminaPessoa(undefined)"
      ("Valor não e numérico!")
    }
  }

  pesquisar(pesquisa: string) {
    this.listaPessoas = this.listaPessoasOriginal.filter(pessoa => pessoa.nome.toUpperCase().includes(pesquisa.toUpperCase()));
  }
}