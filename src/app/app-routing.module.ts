import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { HomeComponent } from './core/home/home.component';
import { PaginaerroComponent } from './core/paginaerro/paginaerro.component';
import { PessoadetalheComponent } from './pessoas/pessoadetalhe/pessoadetalhe.component';
import { PessoastopoComponent } from './pessoas/pessoastopo/pessoastopo.component';
import { TestesComponent } from './testes/testes/testes.component';
import { TestesdadosComponent } from './testes/testesdados/testesdados.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'testes', component: TestesComponent },
  { path: 'testesdados', component: TestesdadosComponent },
  { path: 'pessoas', component: PessoastopoComponent },
  { path: 'pessoas/:id', component: PessoadetalheComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '**', component: PaginaerroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
