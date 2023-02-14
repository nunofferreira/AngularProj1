import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordion2itemComponent } from './accordion2item.component';

describe('Accordion2itemComponent', () => {
  let component: Accordion2itemComponent;
  let fixture: ComponentFixture<Accordion2itemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accordion2itemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordion2itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
