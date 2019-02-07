import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaReactiveFormComponent } from './pizza-form-reactive/pizza-form-reactive.component';
import { RouterModule, Routes } from '@angular/router';
import { PizzaSelectorComponent } from './components/pizza-selector/pizza-selector.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormUtilsService } from './services/form-utils.service';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DrinkSelectorComponent } from './components/drink-selector/drink-selector.component';
import { MatRadioModule } from '@angular/material/radio';
import { PizzaFormTemplateComponent } from './pizza-form-template/pizza-form-template.component';

const routes: Routes = [
  {path: 'pizza',
  children: [
    {
      path: 'reactive',
      component: PizzaReactiveFormComponent,
    },
    {
      path: 'template',
      component: PizzaFormTemplateComponent,
    }
  ]}
];

@NgModule({
  declarations: [PizzaReactiveFormComponent, PizzaSelectorComponent, DrinkSelectorComponent, PizzaFormTemplateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
    FormUtilsService,
  ],
})
export class PizzaFormModule { }
