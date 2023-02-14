import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestesComponent } from './testes/testes/testes.component';
import { TestesdadosComponent } from './testes/testesdados/testesdados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoastopoComponent } from './pessoas/pessoastopo/pessoastopo.component';
import { PessoaspesquisaComponent } from './pessoas/pessoaspesquisa/pessoaspesquisa.component';
import { PessoastabelaComponent } from './pessoas/pessoastabela/pessoastabela.component';
import { PessoasinsereComponent } from './pessoas/pessoasinsere/pessoasinsere.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { CollapsibleComponent } from './accordion/collapsible/collapsible.component';
import { Accordion2Component } from './accordion2/accordion2/accordion2.component';
import { Accordion2itemComponent } from './accordion2/accordion2item/accordion2item.component';
import { Accordion2testComponent } from './accordion2/accordion2test/accordion2test.component';

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
    Accordion2Component,
    Accordion2itemComponent,
    Accordion2testComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }