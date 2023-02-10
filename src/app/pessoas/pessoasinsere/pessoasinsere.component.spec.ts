import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasinsereComponent } from './pessoasinsere.component';

describe('PessoasinsereComponent', () => {
  let component: PessoasinsereComponent;
  let fixture: ComponentFixture<PessoasinsereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasinsereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasinsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
