import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestesComponent } from './testes/testes/testes.component';
import { TestesdadosComponent } from './testes/testesdados/testesdados.component';
import { PessoastopoComponent } from './pessoas/pessoastopo/pessoastopo.component';
import { PessoaspesquisaComponent } from './pessoas/pessoaspesquisa/pessoaspesquisa.component';
import { PessoastabelaComponent } from './pessoas/pessoastabela/pessoastabela.component';
import { PessoasinsereComponent } from './pessoas/pessoasinsere/pessoasinsere.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { CollapsibleComponent } from './accordion/collapsible/collapsible.component';
import { PaginaerroComponent } from './core/paginaerro/paginaerro.component';
import { HomeComponent } from './core/home/home.component';
import { PessoadetalheComponent } from './pessoas/pessoadetalhe/pessoadetalhe.component';
import { Accordion1Component } from './accordion1/accordion1/accordion1.component';
import { ItemComponent } from './accordion1/item/item.component';
import { TesteaccordionComponent } from './accordion1/testeaccordion/testeaccordion.component';
import { Accordion2Component } from './accordion2/accordion2/accordion2.component';
import { Accordion2itemComponent } from './accordion2/accordion2item/accordion2item.component';
import { Accordion2testComponent } from './accordion2/accordion2test/accordion2test.component';
import { PostsComponent } from './jsonplaceholder/posts/posts.component';
import { DialogboxComponent } from './jsonplaceholder/dialogbox/dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TestesComponent,
    TestesdadosComponent,
    PessoastopoComponent,
    PessoaspesquisaComponent,
    PessoastabelaComponent,
    PessoasinsereComponent,
    AccordionComponent,
    CollapsibleComponent,
    PaginaerroComponent,
    HomeComponent,
    PessoadetalheComponent,
    Accordion1Component,
    ItemComponent,
    TesteaccordionComponent,
    Accordion2Component,
    Accordion2itemComponent,
    Accordion2testComponent,
    PostsComponent,
    DialogboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }