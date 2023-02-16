import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteaccordionComponent } from './testeaccordion.component';

describe('TesteaccordionComponent', () => {
  let component: TesteaccordionComponent;
  let fixture: ComponentFixture<TesteaccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteaccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
