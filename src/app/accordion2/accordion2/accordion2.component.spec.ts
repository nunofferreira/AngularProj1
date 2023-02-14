import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordion2Component } from './accordion2.component';

describe('Accordion2Component', () => {
  let component: Accordion2Component;
  let fixture: ComponentFixture<Accordion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accordion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
