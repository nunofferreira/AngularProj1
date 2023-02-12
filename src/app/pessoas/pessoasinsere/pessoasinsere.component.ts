import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoasinsere',
  templateUrl: './pessoasinsere.component.html',
  styleUrls: ['./pessoasinsere.component.css']
})
export class PessoasinsereComponent implements OnInit {

  formPessoas!: FormGroup;

  ngOnInit() {
    this.formPessoas = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      data_nascimento: new FormControl(''),
      casado: new FormControl(false)
    })
  }

  inserePessoa() {
    console.log(this.formPessoas.value);
    this.formPessoas.reset();
  }

}
