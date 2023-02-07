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

  imagem: string = "/assets/galeria1.jpg";
  imagem2: string = "galeria1.jpg";
  imagem3: string = "galeria2.jpg";
  imagem2Temp: string = this.imagem2;

  escondido: boolean = true;

  mostra_conteudo() {
    return this.conteudo.toUpperCase();
  }

  muda_conteudo() {
    this.conteudo = "Lixo";
  }

  muda_imagem() {
    this.imagem2 = this.imagem3;
  }

  toggleImagem() {
    this.imagem2 = this.imagem2 === "galeria1.jpg" ? this.imagem3 : this.imagem2Temp;

    // if (this.imagem2 === "galeria1.jpg") {
    //   this.imagem2 = this.imagem3;
    // } else {
    //   this.imagem2 = this.imagem2Temp;
    // }
  }

  toggleConteudo() {
    // if (this.escondido) {
    //   this.escondido = false;
    // } else {
    //   this.escondido = true;
    // }
    this.escondido = !this.escondido;
  }

  // mostraButtonLabel(){
  //   if (this.)
  // }
}




