import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { TesteaccordionComponent } from './accordion1/testeaccordion/testeaccordion.component';
import { Accordion2testComponent } from './accordion2/accordion2test/accordion2test.component';
import { HomeComponent } from './core/home/home.component';
import { PaginaerroComponent } from './core/paginaerro/paginaerro.component';
import { PostsComponent } from './jsonplaceholder/posts/posts.component';
import { PessoadetalheComponent } from './pessoas/pessoadetalhe/pessoadetalhe.component';
import { PessoastopoComponent } from './pessoas/pessoastopo/pessoastopo.component';
import { TestesComponent } from './testes/testes/testes.component';
import { TestesdadosComponent } from './testes/testesdados/testesdados.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'testes', component: TestesComponent },
  { path: 'testedados', component: TestesdadosComponent },
  { path: 'pessoas', component: PessoastopoComponent },
  { path: 'pessoas/:id', component: PessoadetalheComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'accordion1', component: TesteaccordionComponent },
  { path: 'accordion2', component: Accordion2testComponent },
  { path: 'jsonplaceholder', component: PostsComponent },
  { path: '**', component: PaginaerroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
