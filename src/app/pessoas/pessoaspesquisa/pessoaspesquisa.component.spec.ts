import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaspesquisaComponent } from './pessoaspesquisa.component';

describe('PessoaspesquisaComponent', () => {
  let component: PessoaspesquisaComponent;
  let fixture: ComponentFixture<PessoaspesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaspesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaspesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
