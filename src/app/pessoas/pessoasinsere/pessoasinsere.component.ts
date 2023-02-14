import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/pessoa.type';

@Component({
  selector: 'app-pessoasinsere',
  templateUrl: './pessoasinsere.component.html',
  styleUrls: ['./pessoasinsere.component.css']
})
export class PessoasinsereComponent implements OnInit {

  @Output() novaPessoa: EventEmitter<Pessoa> = new EventEmitter()

  formPessoas!: FormGroup;

  ngOnInit() {
    this.formPessoas = new FormGroup({
      //new FormControl(default_value, validators/options),
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade: new FormControl(null, Validators.required),
      data_nascimento: new FormControl('', Validators.required),
      casado: new FormControl(false)
    })
  }

  /*
  ng-touched/ng-untouched - se o utilizador já entrou e saíu do campo
  ng-pristine/ng-dirty - se o utilizador já escreveu algum conteúdo no campo
  ng-valid/ng-invalid - aplicado caso exista um validator associado ao campo 
  
  */

  inserePessoa() {
    console.log(this.formPessoas.value);
    // if (this.formPessoas.invalid) {
    //   alert("Todos os campos são de preenchimento obrigatório!");
    // } else {
    this.novaPessoa.emit(this.formPessoas.value);
    this.formPessoas.reset();
    // }
  }

  get nome() {
    return this.formPessoas.get('nome');
  }

}