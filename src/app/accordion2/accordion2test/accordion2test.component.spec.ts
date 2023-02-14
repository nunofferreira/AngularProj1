import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordion2testComponent } from './accordion2test.component';

describe('Accordion2testComponent', () => {
  let component: Accordion2testComponent;
  let fixture: ComponentFixture<Accordion2testComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accordion2testComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordion2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
