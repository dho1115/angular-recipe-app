import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

//Services.
import { ShoppingListService } from '../Services/shopping-list.service';
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Monster Burger', 'Recipe for Monster Burger', 'https://www.happyfoodstube.com/wp-content/uploads/2020/10/halloween-monster-burgers-recipe.jpg', [ new Ingredient('ground beef', 5), new Ingredient('lettuce', 7), new Ingredient('raw white onions', 9)]),
    new Recipe('Salmon Pasta', 'Delicious Salmon Pasta!!!', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-smoked-salmon-pasta-horizontal-1542310073.png?resize=480:*', [ new Ingredient('fresh salmon', 9), new Ingredient('spaghetti', 15), new Ingredient('cucumbers', 11)]),
    new Recipe('Cucumber Salad', 'Cucumber Salad Meal.', 'https://images-gmi-pmc.edge-generalmills.com/f920cb90-3541-49fb-b9e6-2f9add86302b.jpg', [ new Ingredient('cucumbers', 15), new Ingredient('balsamic vinegar', 5), new Ingredient('tomatoes', 17)]),
    new Recipe('Iced Tea.', 'Chilled Iced Tea!!!', 'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-iced-tea-8-1.jpg', [new Ingredient('black iced tea', 195), new Ingredient('green iced tea', 105)]),
    new Recipe('Ice cold water.', 'Cold, distilled water.', 'https://www.news-medical.net/image.axd?picture=2021%2F7%2Fshutterstock_1548860402.jpg', [new Ingredient ('iced cold distilled water', 1975), new Ingredient('ice', 11975)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
