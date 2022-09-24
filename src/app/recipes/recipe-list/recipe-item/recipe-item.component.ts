import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDetailEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeItemClicked() {
    console.log(`${JSON.stringify(this.recipe)} has been clicked!!!`);
  }

  emitRecipe(recipe) {
    this.recipeDetailEmitter.emit(recipe);
    console.log(`${JSON.stringify(recipe)} has been emitted.`);
  }

}
