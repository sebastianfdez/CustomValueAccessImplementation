import { Injectable, Injector } from '@angular/core';
import { FormControl, ControlContainer, FormControlName, FormGroupDirective, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Injectable()
export class FormUtilsService {

  constructor() {
  }

  getFormControl(injector: Injector): FormControl {
    // Try to get the formControl direct by the injector
    const formControl = injector.get(FormControl, null);
    if (formControl) {
      return formControl;
    } else {
      // Try to obtain the formControl by the control container
      const controlContainer = injector.get(ControlContainer, null);
      const formControlNameDir = injector.get(FormControlName, null);
      if (formControlNameDir && controlContainer instanceof FormGroupDirective) {
        return controlContainer.getControl(formControlNameDir);
      } else {
        // When the component is not used inside a form, it will use a new FormControl
        return new FormControl('');
      }
    }
  }

}
