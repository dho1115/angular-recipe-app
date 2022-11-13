import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { RecipeService } from '../../../Services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onRecipeItemClicked() {
    console.log(`${JSON.stringify(this.recipe)} has been clicked!!!`);
  }

  onSelected() {
    console.log({recipe: this.recipe})
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
