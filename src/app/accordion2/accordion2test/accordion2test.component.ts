import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion2test',
  templateUrl: './accordion2test.component.html',
  styleUrls: ['./accordion2test.component.css']
})
export class Accordion2testComponent {

  itens = [
    { title: 'Titulo1', content: '<span><strong>Teste</strong><br>de HTML</span><script>alert("Olá");</script>' },
    { title: 'Titulo2', content: 'Conteúdo 2' },
    { title: 'Titulo3', content: 'Conteúdo 3' },
  ]
}
