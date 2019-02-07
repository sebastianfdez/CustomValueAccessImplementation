import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSelectorComponent } from './drink-selector.component';

describe('DrinkSelectorComponent', () => {
  let component: DrinkSelectorComponent;
  let fixture: ComponentFixture<DrinkSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
