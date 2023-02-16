import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/shared/pessoa.type';
import { ServpessoasService } from 'src/app/shared/servpessoas.service';

@Component({
  selector: 'app-pessoadetalhe',
  templateUrl: './pessoadetalhe.component.html',
  styleUrls: ['./pessoadetalhe.component.css']
})
export class PessoadetalheComponent implements OnInit {

  id!: number;
  pessoa!: Pessoa;

  constructor(private rotaAtiva: ActivatedRoute, private servpessoas: ServpessoasService) { }

  ngOnInit() {
    this.id = Number(this.rotaAtiva.snapshot.paramMap.get("id"));

    this.pessoa = this.servpessoas.infoPessoa(this.id);
  }
}
