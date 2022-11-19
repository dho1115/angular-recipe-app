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

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientEmitter.subscribe((ingredient: Ingredient) => {
      this.ingredients = [...this.ingredients, ingredient];
    })
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    console.log(`${ingredient} has been added.`)
  }

}
