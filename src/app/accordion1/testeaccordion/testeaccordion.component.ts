import { Component } from '@angular/core';

@Component({
  selector: 'app-testeaccordion',
  templateUrl: './testeaccordion.component.html',
  styleUrls: ['./testeaccordion.component.css']
})
export class TesteaccordionComponent {

  itens = [
    // { title : 'Titulo1', content: 'Conteúdo 1'},
    { title: 'Titulo1', content: '<span><strong>Teste</strong><br>de HTML</span><script>alert("Olá");</script>' },
    { title: 'Titulo2', content: 'Conteúdo 2' },
    { title: 'Titulo3', content: 'Conteúdo 3' },
  ]

}
