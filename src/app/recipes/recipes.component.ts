import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

import { RecipeService } from '../Services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ] //registering a service.
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log({ selectedRecipe: this.selectedRecipe, recipe })
      return this.selectedRecipe = recipe
    })
  }

}
