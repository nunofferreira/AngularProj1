import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/pessoa.type';
import { pessoas } from '../../shared/pessoas';

@Component({
  selector: 'app-testesdados',
  templateUrl: './testesdados.component.html',
  styleUrls: ['./testesdados.component.css']
})

export class TestesdadosComponent implements OnInit, OnDestroy { // implements é dependency injection → não há necessidade de instanciar uma classe para usar um objeto dessa mesma classe

  listaPessoasOriginal: Pessoa[] = pessoas;
  listaPessoas: Pessoa[] = pessoas;

  cpesquisa: string = "";

  constructor() {
    // console.log(this.listaPessoas);
    // raramente se usa um construtor(instanciar objetos) em Angular, porque devido ao ngOnInit(dependency injection) que é o construtor do Angular
  }

  // lifecycle hook
  ngOnInit() {
    console.log(this.listaPessoas);
  }

  ngOnDestroy() {

  }

  // criarPessoa() {
  //   this.listaPessoas.push({
  //     id: 4,
  //     nome: "Maria Albertina",
  //     idade: 60,
  //     data_nascimento: new Date('1960'),
  //     casado: true
  //   })
  //   // change detection → Angular está à escuta de alterações às variáveis
  // }

  // processaPesquisa(valor: string) {
  //   console.log("clicou!" + valor);
  //   // toLocaleUpperCase() → vai captar assentos
  //   this.listaPessoas = this.listaPessoasOriginal.filter(pessoa => pessoa.nome.toUpperCase().includes(valor.toUpperCase()));
  // }

  processaPesquisa() {
    // console.log("clicou!")
    this.listaPessoas = this.listaPessoasOriginal.filter(pessoa => pessoa.nome.toUpperCase().includes(this.cpesquisa.toUpperCase()));
  }

  limpaPesquisa() { // [...] → faz uma cópia do array
    this.listaPessoas = [...this.listaPessoasOriginal];
    this.cpesquisa = '';
  }

  eliminaPessoa(id: number | undefined) {
    // this.listaPessoasOriginal = this.listaPessoasOriginal.filter(pessoa => pessoa.id !== id);
    // this.listaPessoas = [...this.listaPessoasOriginal]; // ← este é o mais correto

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
}
