import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-form-template',
  templateUrl: './pizza-form-template.component.html',
  styleUrls: ['./pizza-form-template.component.scss']
})
export class PizzaFormTemplateComponent implements OnInit {

  isDisabled = false;
  requiredForm = false;

  // Initial values
  pizzaFormValue = {
    customerName: 'Sebastian',
    selectedPizza: 'nap',
    selectedDrink: 'wat',
  };

  constructor() { }

  ngOnInit() {
  }

  disableForm(event) {
    this.isDisabled = event.checked;
  }

  setRequireForm(event) {
    this.requiredForm = event.checked;
  }

}
