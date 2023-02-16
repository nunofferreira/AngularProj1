import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaerroComponent } from './paginaerro.component';

describe('PaginaerroComponent', () => {
  let component: PaginaerroComponent;
  let fixture: ComponentFixture<PaginaerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaerroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
