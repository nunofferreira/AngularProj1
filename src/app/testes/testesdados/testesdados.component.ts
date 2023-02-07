import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.type';
import { pessoas } from './pessoas';

@Component({
  selector: 'app-testesdados',
  templateUrl: './testesdados.component.html',
  styleUrls: ['./testesdados.component.css']
})
export class TestesdadosComponent implements OnInit, OnDestroy {

  listaPessoasOriginal: Pessoa[] = pessoas;
  listaPessoas: Pessoa[] = pessoas;

  constructor() {
    // console.log(this.listaPessoas);
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
  //   // change detection
  // }

  processaPesquisa(valor: string) {
    console.log("clicou!" + valor);
    // toLocaleUpperCase() → vai captar assentos
    this.listaPessoas = this.listaPessoasOriginal.filter(pessoa => pessoa.nome.toUpperCase().includes(valor.toUpperCase()));
  }

  limpaPesquisa() {
    this.listaPessoas = this.listaPessoasOriginal;
  }




}
