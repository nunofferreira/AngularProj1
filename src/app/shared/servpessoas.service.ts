import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/pessoa.type';
import { pessoas } from 'src/app/shared/pessoas';

@Injectable({
  providedIn: 'root'
})
export class ServpessoasService {
  private listaPessoas: Pessoa[] = pessoas;

  constructor() { }

  lerDados(): Pessoa[] {
    return this.listaPessoas;
  }

  eliminaPessoa(id: number): boolean {
    let posicao = this.listaPessoas.findIndex(pessoa => pessoa.id === id);
    if (posicao !== -1) {
      this.listaPessoas.splice(posicao, 1);
      return true;
    } else {
      return false;
    }
  }

  pesquisaPessoas(pesquisa: string): Pessoa[] {
    return this.listaPessoas.filter(pessoa => pessoa.nome.toUpperCase().includes(pesquisa.toUpperCase()));
  }

  novaPessoa(pessoa: Pessoa) {
    // pessoa.id=4;
    // this.listaPessoas.push(pessoa);

    this.listaPessoas.push({ ...pessoa, id: 4 });
    // criar um novo obj, com o conteúdo do obj pessoa (...), mais uma nova propriedade com o valor 4. 
  }

  infoPessoa(id: number): Pessoa {
    return this.listaPessoas.filter(pessoa => pessoa.id === id)[0];
  }

}
