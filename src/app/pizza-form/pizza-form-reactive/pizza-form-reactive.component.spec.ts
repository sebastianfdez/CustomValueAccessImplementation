import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaReactiveFormComponent } from './pizza-form-reactive.component';

describe('PizzaFormComponent', () => {
  let component: PizzaReactiveFormComponent;
  let fixture: ComponentFixture<PizzaReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
