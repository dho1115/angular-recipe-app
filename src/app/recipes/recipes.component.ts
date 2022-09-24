import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  receivedFromRecipesList: Recipe

  constructor() { }

  ngOnInit(): void {
  }

  receivedFromRecipesListFunction(receivedRecipe: Recipe) {
    this.receivedFromRecipesList = receivedRecipe;
    console.log({ receivedFromRecipesList: this.receivedFromRecipesList })
  }

}
