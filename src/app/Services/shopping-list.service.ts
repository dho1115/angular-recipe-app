import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('tuna', 7),
    new Ingredient('pasta', 5),
    new Ingredient('Iced Tea', 5)
  ];

  ingredientEmitter = new EventEmitter<Ingredient>()

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  } //replaces onIngredientAdded method in shopping-list.component.ts.
}
