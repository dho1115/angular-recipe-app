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
  selectedRecipe: Recipe; //This will receive the details of whatever recipe was clicked via .subscribe() pass this onto the child recipe-detail via @Input() binding.

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log({ selectedRecipe: this.selectedRecipe, recipe })
      return this.selectedRecipe = recipe
    }) //Because we used .subscribe( ), whatever is emitted from recipeSelected (the name of the EventEmitter< >( ) we gave back in RecipeService class in recipe.service.ts), the argument recipe: Recipe will be whatever recipe was emitted when we click on one of the recipes from the list located on the LEFT of the app.
  }

}
