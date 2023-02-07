import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesdadosComponent } from './testesdados.component';

describe('TestesdadosComponent', () => {
  let component: TestesdadosComponent;
  let fixture: ComponentFixture<TestesdadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesdadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesdadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
