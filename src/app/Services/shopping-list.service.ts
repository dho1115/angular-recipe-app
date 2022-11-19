import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('tuna', 7),
    new Ingredient('pasta', 5),
    new Ingredient('Iced Tea', 5)
  ];

  ingredientEmitter = new EventEmitter<Ingredient>()

  constructor() { }

  fetchIngredients() {
    return this.ingredients.slice();
  }
}
