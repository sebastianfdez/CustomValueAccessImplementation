import { Component, OnInit, forwardRef, Injector, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, RequiredValidator } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils.service';

@Component({
  selector: 'app-drink-selector',
  templateUrl: './drink-selector.component.html',
  styleUrls: ['./drink-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DrinkSelectorComponent),
    }
  ]
})

// To use this component as a FormControl or FormGroup it is necesary to use the interface ControlValueAccessor
export class DrinkSelectorComponent implements OnInit, ControlValueAccessor, AfterContentInit {

  // Drink selector Form control
  drinkFormControl: FormControl = new FormControl('');

  typeOfDrinks = [
    {value: 'coke', name: 'Coca-Cola'},
    {value: 'wat', name: 'Water'},
    {value: 'beer', name: 'Beer'},
  ];

  get required() {
    try {
      return this.injector.get(RequiredValidator).required;
    } catch {
      return this.drinkFormControl.hasError('required');
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
    this.drinkFormControl = this.formUtil.getFormControl(this.injector);
  }

  // ControlValueAccessor interface methods
  private propagateChange = (_: any) => {
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  writeValue(obj: any): void {
    this.drinkFormControl.patchValue(obj);
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.drinkFormControl.disabled !== isDisabled) {
      isDisabled ? this.drinkFormControl.disable() : this.drinkFormControl.enable();
    }
  }

  disableForm(event) {
    event.checked ? this.drinkFormControl.disable() : this.drinkFormControl.enable();
  }

  onChanges(event) {
    this.propagateChange(event.value);
  }

}
