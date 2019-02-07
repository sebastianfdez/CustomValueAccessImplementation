import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-pizza-form-reactive',
  templateUrl: './pizza-form-reactive.component.html',
  styleUrls: ['./pizza-form-reactive.component.scss']
})
export class PizzaReactiveFormComponent implements OnInit {

  required = false;

  // Main Reactive Form
  public pizzaForm: FormGroup = new FormGroup({
    customerName: new FormControl(null),
    selectedPizza: new FormControl(null),
    selectedDrink: new FormControl(null),
  });

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.pizzaForm.controls);
  }

  disableForm(event) {
    event.checked ? this.pizzaForm.disable() : this.pizzaForm.enable();
  }

  setValidators(required: boolean) {
    // Set every control as required
    this.pizzaForm.controls.customerName.setValidators(required ? Validators.required : []);
    this.pizzaForm.controls.selectedPizza.setValidators(required ? Validators.required : []);
    this.pizzaForm.controls.selectedPizza.updateValueAndValidity();
    this.pizzaForm.controls.selectedDrink.setValidators(required ? Validators.required : []);
    this.pizzaForm.controls.selectedDrink.updateValueAndValidity();
  }

  // Custom Validator
  telephoneNumberPatternValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const TEL_REGEX = new RegExp(/^(?:0|\+)\d+$/);
      if (!control.value) {
        return null;
      } else if (control.value.length > 10) {
        return { 'max': true };
      } else if (control.value.length < 10) {
        return { 'min': true };
      }
      return TEL_REGEX.test(control.value) ? null : { 'pattern': true };
    };
  }

  setRequireForm(event) {
    this.required = event.checked;
    this.setValidators(event.checked);
  }
}
