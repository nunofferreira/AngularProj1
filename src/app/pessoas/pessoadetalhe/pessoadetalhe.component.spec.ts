import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoadetalheComponent } from './pessoadetalhe.component';

describe('PessoadetalheComponent', () => {
  let component: PessoadetalheComponent;
  let fixture: ComponentFixture<PessoadetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoadetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoadetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
