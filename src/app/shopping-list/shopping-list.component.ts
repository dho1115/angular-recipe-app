import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

//Service.
import { ShoppingListService } from '../Services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  // ingredients: Ingredient[] = [
  //   new Ingredient('tuna', 7),
  //   new Ingredient('pasta', 5),
  //   new Ingredient('Iced Tea', 5)
  // ];

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingListService.fetchIngredients();
    this._shoppingListService.ingredientEmitter.subscribe((ingredient: Ingredient) => {
      this.ingredients = [...this.ingredients, ingredient];
    })
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    console.log(`${ingredient} has been added.`)
  }

}
