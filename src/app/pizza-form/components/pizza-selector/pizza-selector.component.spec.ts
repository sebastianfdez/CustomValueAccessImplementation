import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSelectorComponent } from './pizza-selector.component';

describe('PizzaSelectorComponent', () => {
  let component: PizzaSelectorComponent;
  let fixture: ComponentFixture<PizzaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
