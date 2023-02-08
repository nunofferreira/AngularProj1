import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoastopoComponent } from './pessoastopo.component';

describe('PessoastopoComponent', () => {
  let component: PessoastopoComponent;
  let fixture: ComponentFixture<PessoastopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoastopoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoastopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
