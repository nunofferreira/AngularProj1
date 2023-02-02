import { Component } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
  // TypeScript -tipos de dados
  conteudo: string = "Teste";
  // variável que pode conter qualquer tipo de dados
  outra: any;

  conteudo2: string = "Teste".toUpperCase();

  mostra_conteudo() {
    return this.conteudo.toUpperCase();
  }

  muda_conteudo() {
    this.conteudo = "Lixo";
  }
}
