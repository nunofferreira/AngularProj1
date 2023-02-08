import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoastabelaComponent } from './pessoastabela.component';

describe('PessoastabelaComponent', () => {
  let component: PessoastabelaComponent;
  let fixture: ComponentFixture<PessoastabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoastabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoastabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
