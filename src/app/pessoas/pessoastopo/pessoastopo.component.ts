import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/pessoa.type';
import { ServpessoasService } from 'src/app/shared/servpessoas.service';
// import { pessoas } from 'src/app/shared/pessoas';

@Component({
  selector: 'app-pessoastopo',
  templateUrl: './pessoastopo.component.html',
  styleUrls: ['./pessoastopo.component.css']
})
export class PessoastopoComponent implements OnInit, OnDestroy {
  // listaPessoasOriginal: Pessoa[] = pessoas;
  // listaPessoas: Pessoa[] = pessoas;
  // listaPessoasOriginal!: Pessoa[];
  listaPessoas!: Pessoa[];

  vPesquisa: string = '';

  //dependency injection 
  constructor(private servpessoas: ServpessoasService, private router: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    // this.listaPessoasOriginal = this.servpessoas.lerDados();
    // this.listaPessoas = [...this.listaPessoasOriginal];
    this.listaPessoas = this.servpessoas.lerDados();

    this.vPesquisa = this.rotaAtiva.snapshot.queryParams['valorPesquisa'];
    console.log(this.vPesquisa);
    if (typeof this.vPesquisa !== "undefined") {
      this.pesquisar(this.vPesquisa);
    }
  }

  deletePessoa(id: number) {
    // if (typeof id === "number") { // este if é para testar o tipo de dados 
    //   // retorna -1 caso não encontre
    //   let posicao = this.listaPessoasOriginal.findIndex(pessoa => pessoa.id === id);
    //   if (posicao !== -1) {
    //     this.listaPessoasOriginal.splice(posicao, 1);
    //     this.listaPessoas = [...this.listaPessoasOriginal]
    //   } else {
    //     // ex: "eliminaPessoa(25)"
    //     alert("Id Inexistente!");
    //   }
    // } else {
    //   // ex: "eliminaPessoa(undefined)"
    //   ("Valor não e numérico!")

    if (this.servpessoas.eliminaPessoa(id)) {
      alert("Pessoa eliminada");
      // this.listaPessoas = this.servpessoas.lerDados();
    } else {
      alert("Id inexistente!");
    }
  }

  pesquisar(pesquisa: string) {
    //   this.listaPessoas = this.listaPessoasOriginal.filter(pessoa => pessoa.nome.toUpperCase().includes(pesquisa.toUpperCase()));
    // }
    this.listaPessoas = this.servpessoas.pesquisaPessoas(pesquisa);
    this.vPesquisa = pesquisa;
  }

  inserePessoa(pessoa: Pessoa) {
    this.servpessoas.novaPessoa(pessoa);
    // this.listaPessoas = this.servpessoas.lerDados();
  }

  showDetails(id: number) {
    if (this.vPesquisa === '') {
      this.router.navigate(['pessoas', id]);
    } else {
      this.router.navigate(['pessoas', id], {
        queryParams: {
          valorPesquisa: this.vPesquisa
        }
      });
    }
    // this.router.navigateByUrl(`pessoas/${id})`);
  }

  ngOnDestroy() {
    console.log("componente pessoastopo destruido.")
  }
}
