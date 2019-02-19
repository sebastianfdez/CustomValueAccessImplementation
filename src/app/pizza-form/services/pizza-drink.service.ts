import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaType } from '../components/models/pizza-type';
import { DrinkType } from '../components/models/drink-type';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzaDrinkService {

  constructor() { }

  getPizzaTypes(): Observable<PizzaType[]> {
    // return this.http.get<PizzaType>(`${API_URL}/types/pizza`):
    return of([
      {value: 'nap', name: 'Napolitana'},
      {value: 'mar', name: 'Margarita'},
      {value: 'cal', name: 'California'},
      {value: 'veg', name: 'Vegetarian'},
      {value: '4st', name: '4 stations'},
    ]);
  }

  getDrinkTypes(): Observable<DrinkType[]> {
    // return this.http.get<DrinkType>(`${API_URL}/types/drinks`):
    return of([
      {value: 'coke', name: 'Coca-Cola'},
      {value: 'wat', name: 'Water'},
      {value: 'beer', name: 'Beer'},
      {value: 'wine', name: 'Wine'},
    ]);
  }

}
