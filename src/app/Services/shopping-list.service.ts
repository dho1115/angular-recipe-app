import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('tuna', 7),
    new Ingredient('pasta', 5),
    new Ingredient('Iced Tea', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice()) /* This will always give us the most updated ingredients: Ingredient[] array.
    HOW DOES IT DO THAT?
    ANSWER: Every time this function/method addIngredient is called:
    (1) this.ingredients.push(ingredient) will add the new ingredient FIRST (because this method is called first b/c it is placed above this.ingredientsChanged.emit( ).
    (2) AFTER this.ingredients.push(ingredient) is done pushing this new ingredient to the array, this.ingredients.emit(this.ingredients.slice()), this.ingredientsChanged.emit will emit the UPDATED COPY (with the "new pushed ingredient") of this.ingredients.slice().
    */
  } //replaces onIngredientAdded method in shopping-list.component.ts.
}
