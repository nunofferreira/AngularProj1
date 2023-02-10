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
    CollapsibleComponent
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