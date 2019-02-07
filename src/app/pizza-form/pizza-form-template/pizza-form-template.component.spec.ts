import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormTemplateComponent } from './pizza-form-template.component';

describe('PizzaFormTemplateComponent', () => {
  let component: PizzaFormTemplateComponent;
  let fixture: ComponentFixture<PizzaFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
