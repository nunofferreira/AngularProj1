import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestesComponent } from './testes/testes/testes.component';
import { TestesdadosComponent } from './testes/testesdados/testesdados.component';
import { AccordionComponent } from './testes/accordion/accordion.component';
import { CollapsibleComponent } from './testes/collapsible/collapsible.component';
import { FormsModule } from '@angular/forms';
import { PessoastopoComponent } from './pessoas/pessoastopo/pessoastopo.component';
import { PessoaspesquisaComponent } from './pessoas/pessoaspesquisa/pessoaspesquisa.component';
import { PessoastabelaComponent } from './pessoas/pessoastabela/pessoastabela.component';

@NgModule({
  declarations: [
    AppComponent,
    TestesComponent,
    TestesdadosComponent,
    AccordionComponent,
    CollapsibleComponent,
    PessoastopoComponent,
    PessoaspesquisaComponent,
    PessoastabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
