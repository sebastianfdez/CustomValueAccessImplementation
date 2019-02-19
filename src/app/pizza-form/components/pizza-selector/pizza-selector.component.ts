import { Component, OnInit, forwardRef, Injector, AfterContentInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, RequiredValidator } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils.service';
import { PizzaDrinkService } from '../../services/pizza-drink.service';
import { PizzaType } from '../models/pizza-type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-selector',
  templateUrl: './pizza-selector.component.html',
  styleUrls: ['./pizza-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PizzaSelectorComponent),
    }
  ]
})

// To use this component as a FormControl or FormGroup it is necesary to use the interface ControlValueAccessor
export class PizzaSelectorComponent implements OnInit, ControlValueAccessor, AfterContentInit, OnDestroy {

  typeOfPizzas: PizzaType[] = [];

  // Create a list of subscriptions to push every subscription done in the component.
  subscriptions: Subscription[] = [];

  // Pizza selector Form control
  pizzaFormControl: FormControl = new FormControl('');

  get required() {
    try {
      return this.injector.get(RequiredValidator).required;
    } catch {
      return this.pizzaFormControl.hasError('required');
    }
  }

  constructor(
    private formUtil: FormUtilsService,
    private injector: Injector,
    private pizzaDrinkService: PizzaDrinkService,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.pizzaDrinkService.getPizzaTypes().subscribe((pizzaTypes: PizzaType[]) => {
        this.typeOfPizzas = pizzaTypes;
      })
    );
  }

  ngOnDestroy() {
    // When the component is destroyed, it is necessary to unsubscribe from all the subscriptions
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngAfterContentInit() {
    // Get the form control from the parent or a new one
    this.pizzaFormControl = this.formUtil.getFormControl(this.injector);
  }

  // ControlValueAccessor interface methods
  propagateChange = (_: any) => {
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  writeValue(obj: any): void {
    this.pizzaFormControl.patchValue(obj);
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.pizzaFormControl.disabled !== isDisabled) {
      isDisabled ? this.pizzaFormControl.disable() : this.pizzaFormControl.enable();
    }
  }

  disableForm(event) {
    event.checked ? this.pizzaFormControl.disable() : this.pizzaFormControl.enable();
  }

  onChanges(event) {
    this.propagateChange(event.value);
  }

}
