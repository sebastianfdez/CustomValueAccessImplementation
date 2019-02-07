import { Component, OnInit, forwardRef, Injector, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, RequiredValidator } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils.service';

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
export class PizzaSelectorComponent implements OnInit, ControlValueAccessor, AfterContentInit {

  // Pizza selector Form control
  pizzaFormControl: FormControl = new FormControl('');

  typeOfPizzas = [
    {value: 'nap', name: 'Napolitana'},
    {value: 'mar', name: 'Margarita'},
    {value: 'cal', name: 'California'},
  ];

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
  ) { }

  ngOnInit() {
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
